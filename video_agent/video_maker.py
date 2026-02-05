"""
短视频自动生成器
================
这个脚本会自动完成三件事：
1. 根据主题生成一段文字脚本
2. 把文字变成语音（MP3）
3. 合成完整视频（MP4）

比喻：就像一个"一键生成视频"的机器人！
"""

import random
import os

# ============================================
# 第一步：生成视频脚本（文字部分）
# ============================================

# 开头句模板
OPENINGS = [
    "你知道吗？关于{topic}，有很多人其实都不太了解。",
    "今天我们来聊一个有趣的话题：{topic}。",
    "很多人问我关于{topic}的问题，今天就来解答一下。",
    "{topic}，这是一个值得深入了解的话题。",
    "说到{topic}，你第一时间会想到什么？",
]

# 中间内容模板
MIDDLES = [
    "其实，{topic}和我们的日常生活息息相关。",
    "从不同角度来看，{topic}有着独特的魅力。",
    "了解{topic}，可以让我们看到更广阔的世界。",
    "关于{topic}，最重要的一点是要保持好奇心。",
    "深入研究{topic}后，你会发现很多惊喜。",
]

# 结尾句模板
ENDINGS = [
    "如果你对{topic}也感兴趣，记得点赞关注哦！",
    "关于{topic}，你有什么看法呢？评论区见！",
    "这就是今天关于{topic}的分享，下期再见！",
    "希望这期关于{topic}的内容对你有帮助，我们下期见！",
    "{topic}的故事还有很多，想听的话就关注我吧！",
]


def generate_script(topic):
    """生成视频脚本文字"""
    opening = random.choice(OPENINGS).format(topic=topic)
    middle = random.choice(MIDDLES).format(topic=topic)
    ending = random.choice(ENDINGS).format(topic=topic)
    return f"{opening}\n\n{middle}\n\n{ending}"


# ============================================
# 第二步：文字转语音（用 espeak 离线合成）
# ============================================

def text_to_speech(text, output_path):
    """
    把文字变成语音文件（离线版本，不需要联网）

    比喻：就像请一个"朗读机器人"帮你念出文字

    工作原理：
    1. 用 espeak 把文字转成 WAV 音频
    2. 用 ffmpeg 把 WAV 转成 MP3（文件更小）
    """
    import subprocess
    import tempfile

    print("正在把文字变成语音...")

    # 创建临时 WAV 文件
    wav_path = output_path.replace('.mp3', '.wav')

    # 把文字保存到临时文件（避免命令行编码问题）
    text_file = tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False, encoding='utf-8')
    text_file.write(text)
    text_file.close()

    # 用 espeak 生成语音
    # -v zh 表示中文语音（如果没有中文包会用英文）
    # -s 150 表示语速（数字越大越快）
    # -w 表示输出到文件
    subprocess.run([
        'espeak',
        '-v', 'zh',           # 中文语音
        '-s', '150',          # 语速
        '-f', text_file.name, # 从文件读取文字
        '-w', wav_path        # 输出到 WAV 文件
    ], check=True)

    # 用 ffmpeg 把 WAV 转成 MP3
    subprocess.run([
        'ffmpeg', '-y',       # -y 表示覆盖已有文件
        '-i', wav_path,       # 输入文件
        '-acodec', 'libmp3lame',  # 使用 MP3 编码
        '-ab', '128k',        # 比特率 128k
        output_path           # 输出文件
    ], check=True, capture_output=True)

    # 删除临时文件
    os.remove(text_file.name)
    os.remove(wav_path)

    print(f"语音已保存到：{output_path}")
    return output_path


# ============================================
# 第三步：生成背景图片（用 Pillow）
# ============================================

def create_background_image(text, topic, output_path, width=1080, height=1920):
    """
    生成带文字的背景图片

    比喻：就像做一张"PPT幻灯片"作为视频背景
    """
    from PIL import Image, ImageDraw, ImageFont

    print("正在生成背景图片...")

    # 创建一个渐变色背景（从深蓝到紫色）
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)

    # 画渐变背景
    for y in range(height):
        # 计算渐变颜色（从深蓝 #1a1a2e 到紫色 #4a0080）
        ratio = y / height
        r = int(26 + (74 - 26) * ratio)
        g = int(26 + (0 - 26) * ratio)
        b = int(46 + (128 - 46) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # 尝试使用系统字体，如果没有就用默认字体
    try:
        # Linux 系统常见中文字体路径
        font_paths = [
            "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc",
            "/usr/share/fonts/truetype/wqy/wqy-microhei.ttc",
            "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        ]

        font = None
        for path in font_paths:
            if os.path.exists(path):
                font = ImageFont.truetype(path, 60)
                break

        if font is None:
            font = ImageFont.load_default()

    except Exception:
        font = ImageFont.load_default()

    # 在图片上添加标题
    title = f"【{topic}】"

    # 计算文字位置（居中显示）
    bbox = draw.textbbox((0, 0), title, font=font)
    title_width = bbox[2] - bbox[0]
    title_x = (width - title_width) // 2
    title_y = height // 3

    # 画标题（白色文字）
    draw.text((title_x, title_y), title, fill=(255, 255, 255), font=font)

    # 添加装饰性的小圆点
    for _ in range(50):
        x = random.randint(0, width)
        y = random.randint(0, height)
        size = random.randint(2, 6)
        alpha = random.randint(50, 150)
        draw.ellipse([x, y, x + size, y + size], fill=(255, 255, 255, alpha))

    # 保存图片
    image.save(output_path)

    print(f"背景图片已保存到：{output_path}")
    return output_path


# ============================================
# 第四步：合成视频（用 MoviePy）
# ============================================

def create_video(image_path, audio_path, output_path):
    """
    把图片和音频合成为视频

    比喻：就像把"幻灯片"和"录音"合并成一个视频文件
    """
    from moviepy import ImageClip, AudioFileClip

    print("正在合成视频...")

    # 加载音频文件
    audio = AudioFileClip(audio_path)

    # 创建图片视频剪辑（时长等于音频时长）
    video = ImageClip(image_path, duration=audio.duration)

    # 把音频添加到视频上
    video = video.with_audio(audio)

    # 设置帧率（fps = frames per second，每秒显示多少帧画面）
    video = video.with_fps(24)

    # 导出视频文件
    video.write_videofile(
        output_path,
        codec='libx264',        # 视频编码格式
        audio_codec='aac',      # 音频编码格式
        logger='bar'            # 显示进度条
    )

    # 关闭资源
    audio.close()
    video.close()

    print(f"视频已保存到：{output_path}")
    return output_path


# ============================================
# 主程序：一键生成视频
# ============================================

def make_video(topic):
    """
    一键生成短视频的主函数

    输入：视频主题
    输出：一个完整的 MP4 视频文件
    """

    # 创建输出文件夹
    output_dir = "/home/user/urcuweb5226725.github.io/video_agent/output"
    os.makedirs(output_dir, exist_ok=True)

    # 定义输出文件路径
    script_path = os.path.join(output_dir, "script.txt")
    audio_path = os.path.join(output_dir, "audio.mp3")
    image_path = os.path.join(output_dir, "background.png")
    video_path = os.path.join(output_dir, "final_video.mp4")

    print("=" * 50)
    print(f"    开始制作关于【{topic}】的短视频")
    print("=" * 50)
    print()

    # 第一步：生成脚本
    print("【第1步】生成视频脚本...")
    script = generate_script(topic)
    with open(script_path, 'w', encoding='utf-8') as f:
        f.write(script)
    print(f"脚本内容：\n{script}\n")
    print("✓ 脚本生成完成！\n")

    # 第二步：文字转语音
    print("【第2步】把文字变成语音...")
    text_to_speech(script, audio_path)
    print("✓ 语音生成完成！\n")

    # 第三步：生成背景图片
    print("【第3步】生成背景图片...")
    create_background_image(script, topic, image_path)
    print("✓ 背景图片生成完成！\n")

    # 第四步：合成视频
    print("【第4步】合成最终视频...")
    create_video(image_path, audio_path, video_path)
    print("✓ 视频合成完成！\n")

    print("=" * 50)
    print("    全部完成！")
    print("=" * 50)
    print(f"\n视频文件位置：{video_path}")
    print(f"脚本文件位置：{script_path}")
    print(f"音频文件位置：{audio_path}")
    print(f"图片文件位置：{image_path}")

    return video_path


# 当直接运行这个文件时执行
if __name__ == "__main__":
    # 使用示例主题生成视频
    topic = "健康生活"
    make_video(topic)
