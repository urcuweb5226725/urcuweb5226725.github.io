// === AlphaScreen Demo Data ===
// Realistic mock data for all modules

const STOCKS = [
    { ticker: "AAPL", name: "Apple Inc.", sector: "科技", industry: "消费电子", marketCap: 2890, pe: 28.5, pb: 45.2, roe: 147.3, revGrowth: 4.2, divYield: 0.55, debtRatio: 32.1, perf52w: 18.7, score: 82 },
    { ticker: "MSFT", name: "Microsoft Corp.", sector: "科技", industry: "软件", marketCap: 3150, pe: 35.2, pb: 12.8, roe: 38.4, revGrowth: 15.8, divYield: 0.72, debtRatio: 27.5, perf52w: 22.3, score: 88 },
    { ticker: "NVDA", name: "NVIDIA Corp.", sector: "科技", industry: "半导体", marketCap: 2780, pe: 55.3, pb: 38.7, roe: 89.2, revGrowth: 122.4, divYield: 0.03, debtRatio: 15.2, perf52w: 95.6, score: 91 },
    { ticker: "GOOGL", name: "Alphabet Inc.", sector: "科技", industry: "互联网", marketCap: 2100, pe: 22.1, pb: 6.8, roe: 28.9, revGrowth: 13.5, divYield: 0.45, debtRatio: 11.3, perf52w: 15.8, score: 85 },
    { ticker: "AMZN", name: "Amazon.com", sector: "消费", industry: "电商/云", marketCap: 2050, pe: 42.8, pb: 8.5, roe: 19.7, revGrowth: 12.1, divYield: 0, debtRatio: 28.4, perf52w: 25.2, score: 79 },
    { ticker: "META", name: "Meta Platforms", sector: "科技", industry: "社交媒体", marketCap: 1520, pe: 24.3, pb: 8.2, roe: 33.1, revGrowth: 21.4, divYield: 0.36, debtRatio: 18.7, perf52w: 42.8, score: 86 },
    { ticker: "BRK.B", name: "Berkshire Hathaway", sector: "金融", industry: "综合", marketCap: 870, pe: 12.5, pb: 1.6, roe: 15.8, revGrowth: 8.2, divYield: 0, debtRatio: 22.1, perf52w: 28.5, score: 84 },
    { ticker: "JNJ", name: "Johnson & Johnson", sector: "医疗", industry: "制药", marketCap: 380, pe: 15.2, pb: 5.8, roe: 35.2, revGrowth: 3.1, divYield: 3.15, debtRatio: 38.4, perf52w: -2.8, score: 72 },
    { ticker: "JPM", name: "JPMorgan Chase", sector: "金融", industry: "银行", marketCap: 620, pe: 11.8, pb: 1.9, roe: 16.2, revGrowth: 9.5, divYield: 2.25, debtRatio: 55.2, perf52w: 32.1, score: 80 },
    { ticker: "UNH", name: "UnitedHealth Group", sector: "医疗", industry: "健康保险", marketCap: 480, pe: 18.5, pb: 6.2, roe: 28.7, revGrowth: 10.8, divYield: 1.45, debtRatio: 42.3, perf52w: 8.2, score: 77 },
    { ticker: "V", name: "Visa Inc.", sector: "金融", industry: "支付", marketCap: 560, pe: 30.5, pb: 14.2, roe: 45.8, revGrowth: 10.2, divYield: 0.75, debtRatio: 35.8, perf52w: 18.5, score: 83 },
    { ticker: "PG", name: "Procter & Gamble", sector: "消费", industry: "日用品", marketCap: 380, pe: 25.8, pb: 7.5, roe: 30.2, revGrowth: 2.8, divYield: 2.45, debtRatio: 45.2, perf52w: 5.2, score: 70 },
    { ticker: "HD", name: "Home Depot", sector: "消费", industry: "零售", marketCap: 370, pe: 23.2, pb: 0, roe: 0, revGrowth: 3.5, divYield: 2.55, debtRatio: 97.8, perf52w: 12.8, score: 68 },
    { ticker: "TSM", name: "台积电 TSMC", sector: "科技", industry: "半导体", marketCap: 820, pe: 22.8, pb: 6.5, roe: 28.5, revGrowth: 35.2, divYield: 1.25, debtRatio: 18.5, perf52w: 68.5, score: 90 },
    { ticker: "AVGO", name: "Broadcom Inc.", sector: "科技", industry: "半导体", marketCap: 780, pe: 32.5, pb: 10.8, roe: 25.8, revGrowth: 44.2, divYield: 1.35, debtRatio: 52.1, perf52w: 72.3, score: 87 },
    { ticker: "LLY", name: "Eli Lilly", sector: "医疗", industry: "制药", marketCap: 720, pe: 62.5, pb: 55.2, roe: 58.2, revGrowth: 32.5, divYield: 0.65, debtRatio: 55.8, perf52w: 55.2, score: 85 },
    { ticker: "XOM", name: "Exxon Mobil", sector: "能源", industry: "石油天然气", marketCap: 480, pe: 13.8, pb: 2.1, roe: 18.5, revGrowth: -5.2, divYield: 3.35, debtRatio: 20.5, perf52w: -8.5, score: 65 },
    { ticker: "KO", name: "Coca-Cola", sector: "消费", industry: "饮料", marketCap: 265, pe: 23.5, pb: 10.8, roe: 40.2, revGrowth: 2.5, divYield: 3.05, debtRatio: 55.8, perf52w: 8.2, score: 71 },
    { ticker: "COST", name: "Costco", sector: "消费", industry: "零售", marketCap: 380, pe: 52.8, pb: 15.2, roe: 28.5, revGrowth: 7.8, divYield: 0.52, debtRatio: 22.1, perf52w: 42.5, score: 76 },
    { ticker: "ABBV", name: "AbbVie Inc.", sector: "医疗", industry: "制药", marketCap: 310, pe: 14.8, pb: 18.5, roe: 62.5, revGrowth: -4.2, divYield: 3.85, debtRatio: 68.5, perf52w: 12.5, score: 73 },
    { ticker: "CRM", name: "Salesforce", sector: "科技", industry: "SaaS", marketCap: 280, pe: 42.5, pb: 4.8, roe: 10.2, revGrowth: 11.2, divYield: 0.55, debtRatio: 15.8, perf52w: 18.5, score: 74 },
    { ticker: "AMD", name: "AMD", sector: "科技", industry: "半导体", marketCap: 220, pe: 38.5, pb: 4.2, roe: 8.5, revGrowth: 18.2, divYield: 0, debtRatio: 5.8, perf52w: -12.5, score: 72 },
    { ticker: "ENPH", name: "Enphase Energy", sector: "能源", industry: "清洁能源", marketCap: 28, pe: 42.5, pb: 18.2, roe: 35.8, revGrowth: -15.2, divYield: 0, debtRatio: 35.2, perf52w: -28.5, score: 58 },
    { ticker: "PLUG", name: "Plug Power", sector: "能源", industry: "氢能", marketCap: 3.2, pe: -5.2, pb: 1.8, roe: -45.2, revGrowth: 28.5, divYield: 0, debtRatio: 42.5, perf52w: -55.2, score: 35 },
    { ticker: "SOFI", name: "SoFi Technologies", sector: "金融", industry: "金融科技", marketCap: 12.5, pe: 85.2, pb: 1.5, roe: 2.8, revGrowth: 35.2, divYield: 0, debtRatio: 68.5, perf52w: 45.2, score: 62 },
    { ticker: "PLTR", name: "Palantir Technologies", sector: "科技", industry: "AI/数据", marketCap: 185, pe: 180.5, pb: 28.5, roe: 12.5, revGrowth: 28.2, divYield: 0, debtRatio: 5.2, perf52w: 185.2, score: 69 },
    { ticker: "SMCI", name: "Super Micro Computer", sector: "科技", industry: "服务器", marketCap: 22, pe: 15.2, pb: 3.8, roe: 28.5, revGrowth: 110.5, divYield: 0, debtRatio: 25.8, perf52w: -35.2, score: 63 },
    { ticker: "DVN", name: "Devon Energy", sector: "能源", industry: "石油天然气", marketCap: 28, pe: 8.5, pb: 1.8, roe: 22.5, revGrowth: -12.5, divYield: 5.85, debtRatio: 32.5, perf52w: -22.8, score: 60 },
    { ticker: "O", name: "Realty Income", sector: "地产", industry: "REIT", marketCap: 48, pe: 52.5, pb: 1.2, roe: 3.2, revGrowth: 18.5, divYield: 5.65, debtRatio: 42.8, perf52w: -5.2, score: 66 },
    { ticker: "SCHW", name: "Charles Schwab", sector: "金融", industry: "券商", marketCap: 135, pe: 22.8, pb: 4.2, roe: 18.5, revGrowth: 8.5, divYield: 1.35, debtRatio: 45.2, perf52w: 28.5, score: 75 },
];

const STRATEGY_PRESETS = {
    value: { name: "巴菲特价值", mcapMin: 50, mcapMax: 99999, peMin: 0, peMax: 20, pbMin: 0, pbMax: 5, roeMin: 15, roeMax: 999, revGrowthMin: -10, revGrowthMax: 999, divYieldMin: 0, divYieldMax: 99, debtMin: 0, debtMax: 50, perf52Min: -50, perf52Max: 999 },
    growth: { name: "高成长", mcapMin: 10, mcapMax: 99999, peMin: 0, peMax: 999, pbMin: 0, pbMax: 999, roeMin: 0, roeMax: 999, revGrowthMin: 20, revGrowthMax: 999, divYieldMin: 0, divYieldMax: 99, debtMin: 0, debtMax: 60, perf52Min: -20, perf52Max: 999 },
    dividend: { name: "分红贵族", mcapMin: 30, mcapMax: 99999, peMin: 0, peMax: 35, pbMin: 0, pbMax: 999, roeMin: 10, roeMax: 999, revGrowthMin: -10, revGrowthMax: 999, divYieldMin: 2.5, divYieldMax: 99, debtMin: 0, debtMax: 70, perf52Min: -30, perf52Max: 999 },
    momentum: { name: "动量突破", mcapMin: 5, mcapMax: 99999, peMin: 0, peMax: 999, pbMin: 0, pbMax: 999, roeMin: 0, roeMax: 999, revGrowthMin: 0, revGrowthMax: 999, divYieldMin: 0, divYieldMax: 99, debtMin: 0, debtMax: 80, perf52Min: 30, perf52Max: 999 },
    contrarian: { name: "逆向投资", mcapMin: 5, mcapMax: 99999, peMin: 0, peMax: 15, pbMin: 0, pbMax: 2, roeMin: 5, roeMax: 999, revGrowthMin: -30, revGrowthMax: 999, divYieldMin: 0, divYieldMax: 99, debtMin: 0, debtMax: 50, perf52Min: -60, perf52Max: 0 }
};

const SUPPLY_CHAIN = {
    NVDA: {
        name: "NVIDIA",
        upstream: [
            { ticker: "TSM", name: "台积电", role: "晶圆代工", impact: 95, correlation: 0.88 },
            { ticker: "AVGO", name: "Broadcom", role: "网络芯片", impact: 72, correlation: 0.75 },
            { ticker: "SMCI", name: "Super Micro", role: "服务器组装", impact: 85, correlation: 0.82 },
            { ticker: "MU", name: "Micron", role: "HBM内存", impact: 78, correlation: 0.71 },
            { ticker: "AMAT", name: "应用材料", role: "半导体设备", impact: 65, correlation: 0.62 },
        ],
        downstream: [
            { ticker: "MSFT", name: "Microsoft", role: "Azure AI算力", impact: 88, correlation: 0.79 },
            { ticker: "META", name: "Meta", role: "AI训练集群", impact: 75, correlation: 0.68 },
            { ticker: "GOOGL", name: "Alphabet", role: "Cloud TPU替代", impact: 60, correlation: 0.55 },
            { ticker: "TSLA", name: "Tesla", role: "自动驾驶芯片", impact: 45, correlation: 0.42 },
        ]
    },
    AAPL: {
        name: "Apple",
        upstream: [
            { ticker: "TSM", name: "台积电", role: "A系列芯片代工", impact: 92, correlation: 0.85 },
            { ticker: "QCOM", name: "高通", role: "5G基带芯片", impact: 68, correlation: 0.58 },
            { ticker: "TXN", name: "德州仪器", role: "电源管理芯片", impact: 42, correlation: 0.38 },
            { ticker: "CRUS", name: "Cirrus Logic", role: "音频芯片", impact: 88, correlation: 0.82 },
        ],
        downstream: [
            { ticker: "AAPL", name: "Apple (直销)", role: "Apple Store", impact: 100, correlation: 1.0 },
            { ticker: "T", name: "AT&T", role: "运营商渠道", impact: 35, correlation: 0.28 },
            { ticker: "VZ", name: "Verizon", role: "运营商渠道", impact: 32, correlation: 0.25 },
        ]
    },
    TSLA: {
        name: "Tesla",
        upstream: [
            { ticker: "PCRFY", name: "松下", role: "电池制造", impact: 75, correlation: 0.65 },
            { ticker: "ALB", name: "Albemarle", role: "锂矿供应", impact: 82, correlation: 0.72 },
            { ticker: "NVDA", name: "NVIDIA", role: "自动驾驶芯片", impact: 55, correlation: 0.48 },
            { ticker: "APH", name: "安费诺", role: "连接器", impact: 42, correlation: 0.35 },
        ],
        downstream: [
            { ticker: "TSLA", name: "Tesla (直销)", role: "直营渠道", impact: 100, correlation: 1.0 },
            { ticker: "CHPT", name: "ChargePoint", role: "充电网络", impact: 55, correlation: 0.45 },
        ]
    },
    MSFT: {
        name: "Microsoft",
        upstream: [
            { ticker: "NVDA", name: "NVIDIA", role: "AI GPU供应", impact: 85, correlation: 0.78 },
            { ticker: "AMD", name: "AMD", role: "服务器CPU", impact: 62, correlation: 0.55 },
            { ticker: "SMCI", name: "Super Micro", role: "服务器硬件", impact: 58, correlation: 0.48 },
        ],
        downstream: [
            { ticker: "CRM", name: "Salesforce", role: "竞争/协同", impact: 40, correlation: 0.32 },
            { ticker: "SAP", name: "SAP", role: "企业软件", impact: 35, correlation: 0.28 },
        ]
    },
    AMZN: {
        name: "Amazon",
        upstream: [
            { ticker: "NVDA", name: "NVIDIA", role: "AWS AI芯片", impact: 72, correlation: 0.65 },
            { ticker: "INTC", name: "Intel", role: "服务器CPU", impact: 55, correlation: 0.42 },
        ],
        downstream: [
            { ticker: "SHOP", name: "Shopify", role: "电商平台竞争", impact: 45, correlation: -0.35 },
            { ticker: "FDX", name: "FedEx", role: "物流", impact: 58, correlation: 0.48 },
            { ticker: "UPS", name: "UPS", role: "物流", impact: 55, correlation: 0.45 },
        ]
    },
    META: {
        name: "Meta",
        upstream: [
            { ticker: "NVDA", name: "NVIDIA", role: "AI训练GPU", impact: 88, correlation: 0.78 },
            { ticker: "SMCI", name: "Super Micro", role: "AI服务器", impact: 65, correlation: 0.55 },
        ],
        downstream: [
            { ticker: "SNAP", name: "Snap", role: "社交广告竞争", impact: 55, correlation: -0.42 },
            { ticker: "TTD", name: "Trade Desk", role: "广告技术", impact: 48, correlation: 0.38 },
        ]
    },
    GOOGL: {
        name: "Alphabet",
        upstream: [
            { ticker: "NVDA", name: "NVIDIA", role: "AI GPU", impact: 68, correlation: 0.58 },
            { ticker: "INTC", name: "Intel", role: "服务器CPU", impact: 45, correlation: 0.35 },
        ],
        downstream: [
            { ticker: "TTD", name: "Trade Desk", role: "广告竞争", impact: 52, correlation: -0.38 },
            { ticker: "SNAP", name: "Snap", role: "广告竞争", impact: 48, correlation: -0.35 },
        ]
    }
};

const POLICY_BILLS = [
    {
        id: "clean-energy-2026",
        name: "2026 清洁能源加速法案",
        desc: "扩大太阳能、风能、氢能税收抵免，新增电池储能补贴",
        status: "active",
        date: "2026-02",
        stocks: [
            { ticker: "ENPH", name: "Enphase Energy", score: 95, reason: "太阳能微逆变器龙头，直接受益于安装补贴加倍" },
            { ticker: "FSLR", name: "First Solar", score: 88, reason: "美国本土制造太阳能板，双重受益（制造+安装补贴）" },
            { ticker: "PLUG", name: "Plug Power", score: 82, reason: "氢能全链布局，补贴力度显著提升" },
            { ticker: "NEE", name: "NextEra Energy", score: 78, reason: "全美最大可再生能源运营商" },
            { ticker: "BE", name: "Bloom Energy", score: 75, reason: "固体氧化物燃料电池受益于分布式能源补贴" },
        ]
    },
    {
        id: "ai-regulation-2026",
        name: "AI 安全与创新法案",
        desc: "规范 AI 使用标准，要求大型 AI 公司进行安全审计，设立 AI 创新基金",
        status: "pending",
        date: "2026-03",
        stocks: [
            { ticker: "PLTR", name: "Palantir", score: 90, reason: "已通过多项政府安全认证，合规优势明显" },
            { ticker: "MSFT", name: "Microsoft", score: 82, reason: "Azure AI 合规体系完善，受益于竞争门槛提高" },
            { ticker: "GOOGL", name: "Alphabet", score: 78, reason: "DeepMind 安全研究领先，可能成为审计标准制定者" },
            { ticker: "CRM", name: "Salesforce", score: 72, reason: "企业 AI 合规工具需求上升" },
        ]
    },
    {
        id: "tariff-reshoring",
        name: "供应链回流与关税调整案",
        desc: "对中国进口商品加征关税，同时为美国本土制造提供税收优惠",
        status: "active",
        date: "2026-01",
        stocks: [
            { ticker: "INTC", name: "Intel", score: 85, reason: "美国本土晶圆制造受益于CHIPS法案+新关税保护" },
            { ticker: "GE", name: "GE Aerospace", score: 80, reason: "航空发动机国产化受益" },
            { ticker: "CAT", name: "Caterpillar", score: 75, reason: "基础设施建设设备制造商" },
            { ticker: "X", name: "US Steel", score: 72, reason: "钢铁关税保护直接受益" },
        ]
    }
];

const CONGRESS_TRADES = [
    { name: "Nancy Pelosi", party: "D", ticker: "NVDA", action: "买入", amount: "$1M-$5M", date: "2026-02-28", timing: "AI法案投票前2周" },
    { name: "Tommy Tuberville", party: "R", ticker: "RTX", action: "买入", amount: "$250K-$500K", date: "2026-02-25", timing: "国防预算审议前" },
    { name: "Dan Crenshaw", party: "R", ticker: "XOM", action: "买入", amount: "$100K-$250K", date: "2026-02-22", timing: "能源政策发布前" },
    { name: "Ro Khanna", party: "D", ticker: "PLTR", action: "买入", amount: "$50K-$100K", date: "2026-02-20", timing: "AI安全法案提出后" },
    { name: "Nancy Pelosi", party: "D", ticker: "AAPL", action: "卖出", amount: "$500K-$1M", date: "2026-02-18", timing: "反垄断听证前" },
    { name: "Mark Green", party: "R", ticker: "LMT", action: "买入", amount: "$100K-$250K", date: "2026-02-15", timing: "国防拨款法案前" },
    { name: "Josh Gottheimer", party: "D", ticker: "MSFT", action: "买入", amount: "$250K-$500K", date: "2026-02-12", timing: "科技委员会听证前" },
    { name: "Marjorie Taylor Greene", party: "R", ticker: "TSLA", action: "买入", amount: "$50K-$100K", date: "2026-02-10", timing: "EV政策调整前" },
];

const SQUEEZE_DATA = [
    { ticker: "GME", name: "GameStop", shortInterest: 28.5, daysTocover: 5.2, socialScore: 92, optionFlow: "大量买入看涨", alert: "high", putCall: 0.35, price: 28.5, change: 12.5 },
    { ticker: "AMC", name: "AMC Entertainment", shortInterest: 22.8, daysTocover: 3.8, socialScore: 85, optionFlow: "看涨期权活跃", alert: "high", putCall: 0.42, price: 5.2, change: 8.2 },
    { ticker: "SMCI", name: "Super Micro", shortInterest: 18.5, daysTocover: 4.5, socialScore: 78, optionFlow: "机构买入看涨", alert: "medium", putCall: 0.55, price: 38.5, change: -5.2 },
    { ticker: "RIVN", name: "Rivian", shortInterest: 15.2, daysTocover: 3.2, socialScore: 65, optionFlow: "中性", alert: "medium", putCall: 0.68, price: 12.8, change: -2.5 },
    { ticker: "CVNA", name: "Carvana", shortInterest: 12.8, daysTocover: 2.5, socialScore: 72, optionFlow: "散户买入看涨", alert: "low", putCall: 0.58, price: 185.2, change: 15.8 },
    { ticker: "MSTR", name: "MicroStrategy", shortInterest: 20.5, daysTocover: 6.8, socialScore: 88, optionFlow: "大量看涨期权", alert: "high", putCall: 0.32, price: 320.5, change: 22.5 },
];

const DIVERGENCE_DATA = [
    { ticker: "INTC", name: "Intel", sentimentScore: 18, fundamentalScore: 62, gap: 44, direction: "情绪极度悲观 vs 基本面改善中", type: "bullish" },
    { ticker: "BA", name: "Boeing", sentimentScore: 22, fundamentalScore: 58, gap: 36, direction: "舆论过度悲观 vs 订单回升", type: "bullish" },
    { ticker: "PLTR", name: "Palantir", sentimentScore: 92, fundamentalScore: 55, gap: -37, direction: "情绪极度乐观 vs 估值偏高", type: "bearish" },
    { ticker: "TSLA", name: "Tesla", sentimentScore: 85, fundamentalScore: 60, gap: -25, direction: "MEME热度高 vs 交付量承压", type: "bearish" },
    { ticker: "PFE", name: "Pfizer", sentimentScore: 15, fundamentalScore: 52, gap: 37, direction: "被市场遗忘 vs 管线价值显现", type: "bullish" },
];

const SOCIAL_HEAT = [
    { ticker: "NVDA", mentions: 15800, sentiment: 78, change: 25, source: "Reddit/X", quality: 72, heat: "high" },
    { ticker: "TSLA", mentions: 12500, sentiment: 55, change: -8, source: "Reddit/X", quality: 45, heat: "high" },
    { ticker: "PLTR", mentions: 8200, sentiment: 82, change: 45, source: "Reddit", quality: 58, heat: "high" },
    { ticker: "GME", mentions: 6800, sentiment: 72, change: 120, source: "Reddit/X", quality: 32, heat: "medium" },
    { ticker: "SMCI", mentions: 4500, sentiment: 42, change: -15, source: "StockTwits", quality: 65, heat: "medium" },
    { ticker: "SOFI", mentions: 3800, sentiment: 68, change: 35, source: "Reddit", quality: 55, heat: "medium" },
    { ticker: "MSTR", mentions: 3200, sentiment: 75, change: 80, source: "X/Twitter", quality: 48, heat: "medium" },
    { ticker: "AAPL", mentions: 8500, sentiment: 65, change: 5, source: "Reddit/X", quality: 78, heat: "low" },
];

const HF_POSITIONS = {
    newPositions: [
        { ticker: "SMCI", name: "Super Micro", fund: "Renaissance Technologies", change: "新建仓", shares: "2.8M", value: "$108M", date: "2025-Q4" },
        { ticker: "CRWD", name: "CrowdStrike", fund: "Tiger Global", change: "+45%", shares: "1.5M", value: "$420M", date: "2025-Q4" },
        { ticker: "APP", name: "AppLovin", fund: "Citadel Advisors", change: "新建仓", shares: "3.2M", value: "$920M", date: "2025-Q4" },
        { ticker: "AXON", name: "Axon Enterprise", fund: "Pershing Square", change: "+28%", shares: "800K", value: "$480M", date: "2025-Q4" },
        { ticker: "UBER", name: "Uber", fund: "Appaloosa Management", change: "新建仓", shares: "5.5M", value: "$385M", date: "2025-Q4" },
        { ticker: "VST", name: "Vistra Corp", fund: "Renaissance Technologies", change: "+120%", shares: "4.2M", value: "$550M", date: "2025-Q4" },
    ],
    consensus: [
        { ticker: "NVDA", name: "NVIDIA", funds: 8, topFunds: ["Citadel", "Renaissance", "Tiger Global"], totalValue: "$12.5B" },
        { ticker: "META", name: "Meta", funds: 7, topFunds: ["Bridgewater", "Citadel", "Pershing"], totalValue: "$8.2B" },
        { ticker: "MSFT", name: "Microsoft", funds: 7, topFunds: ["Berkshire", "Bridgewater", "Tiger Global"], totalValue: "$15.8B" },
        { ticker: "GOOGL", name: "Alphabet", funds: 6, topFunds: ["Citadel", "Renaissance", "Appaloosa"], totalValue: "$6.5B" },
        { ticker: "TSM", name: "台积电", funds: 5, topFunds: ["Berkshire", "Tiger Global", "Bridgewater"], totalValue: "$4.8B" },
    ],
    shadow: [
        { fund: "Coatue Management", detail: "AI/SaaS专注型", ticker: "SNOW", action: "新建仓", value: "$280M", return1y: "+42%" },
        { fund: "Lone Pine Capital", detail: "成长股精选", ticker: "DDOG", action: "+35%", value: "$520M", return1y: "+38%" },
        { fund: "Whale Rock Capital", detail: "科技成长型", ticker: "CRWD", action: "+55%", value: "$380M", return1y: "+52%" },
        { fund: "Maverick Capital", detail: "价值+成长混合", ticker: "ABNB", action: "新建仓", value: "$180M", return1y: "+28%" },
        { fund: "D1 Capital Partners", detail: "科技+消费", ticker: "UBER", action: "+42%", value: "$650M", return1y: "+35%" },
    ]
};

const NARRATIVE_DATA = {
    NVDA: {
        promises: [
            { quarter: "2025 Q2", promise: "数据中心收入将在下半年实现翻倍增长", result: "fulfilled", actual: "数据中心收入同比增长 154%，超出承诺" },
            { quarter: "2025 Q3", promise: "Blackwell 架构将在 Q4 实现大规模量产", result: "fulfilled", actual: "Blackwell 出货量超预期 15%" },
            { quarter: "2025 Q4", promise: "2026 年 AI 推理需求将推动新增长引擎", result: "pending", actual: "尚待验证，需观察 Q1 推理芯片出货" },
            { quarter: "2026 Q1", promise: "全年营收指引上调 20%", result: "tracking", actual: "Q1 数据初步符合上调后的指引节奏" },
        ],
        deflectionScore: 22,
        deflectionLevel: "low",
        deflectionDesc: "NVIDIA 管理层在财报电话中直面分析师关于竞争和供应链问题的提问，较少回避。黄仁勋在技术细节上的回答详尽度明显高于行业平均。",
        alignment: [
            {
                topic: "AI 需求可持续性",
                mgmt: "AI 基础设施投资处于早期阶段，未来 5 年数据中心资本支出将持续增长。我们看到了前所未有的需求。",
                analyst: "如何看待客户资本支出放缓的风险？是否存在过度投资导致需求断崖的可能？",
                gap: 35
            },
            {
                topic: "中国市场影响",
                mgmt: "中国市场受限对业绩影响可控，其他市场的增长已完全抵消。",
                analyst: "中国客户正在转向华为昇腾芯片，这是否是永久性市场份额损失？",
                gap: 52
            },
            {
                topic: "毛利率展望",
                mgmt: "随着 Blackwell 产能爬坡完成，毛利率将恢复到 75% 以上。",
                analyst: "新产品初期毛利率通常较低，恢复时间表是否过于乐观？",
                gap: 28
            }
        ]
    },
    TSLA: {
        promises: [
            { quarter: "2025 Q2", promise: "FSD V13 将实现全面自动驾驶", result: "partial", actual: "V13 发布但仍需人工监督，未达 Level 4" },
            { quarter: "2025 Q3", promise: "Robotaxi 将在 2025 年底开始商业运营", result: "missed", actual: "Robotaxi 推迟至 2026 年中" },
            { quarter: "2025 Q4", promise: "Model 2 廉价车型 2026 上半年量产", result: "tracking", actual: "工厂改造中，时间表面临压力" },
            { quarter: "2026 Q1", promise: "能源储存业务将占总营收 20%", result: "pending", actual: "当前约 12%，增速强劲但差距仍大" },
        ],
        deflectionScore: 68,
        deflectionLevel: "high",
        deflectionDesc: "Tesla 管理层在面对交付量下滑和 Robotaxi 推迟问题时，频繁将话题转向 AI 和能源业务。Elon Musk 的回答中出现较多\"长期愿景\"式措辞，回避短期执行细节。",
        alignment: [
            {
                topic: "交付量增长",
                mgmt: "我们正在经历向自动驾驶和AI公司转型的阵痛，短期交付不是关键指标。",
                analyst: "交付量连续两个季度下滑，价格战是否在侵蚀品牌价值？中国市场份额如何？",
                gap: 72
            },
            {
                topic: "Robotaxi 时间表",
                mgmt: "Robotaxi 将彻底改变出行方式，我们是最有可能率先实现的公司。",
                analyst: "Robotaxi 已推迟三次，具体的监管审批进展和城市落地计划是什么？",
                gap: 85
            },
            {
                topic: "利润率压力",
                mgmt: "短期利润率受到战略投资影响，但AI和能源业务将带来更高利润率。",
                analyst: "汽车毛利率已降至 16%，何时能回到 25% 以上？降价策略是否可持续？",
                gap: 65
            }
        ]
    },
    AAPL: {
        promises: [
            { quarter: "2025 Q3", promise: "Apple Intelligence 将覆盖全线产品", result: "fulfilled", actual: "iOS 19 已在全线设备上推出 AI 功能" },
            { quarter: "2025 Q4", promise: "服务收入增速将保持两位数", result: "fulfilled", actual: "服务收入同比增长 14%，创历史新高" },
            { quarter: "2026 Q1", promise: "Vision Pro 第二代将大幅降低成本", result: "tracking", actual: "供应链信息显示成本下降约 40%，但零售价格仍待确认" },
        ],
        deflectionScore: 35,
        deflectionLevel: "medium",
        deflectionDesc: "Apple 管理层回答较为谨慎和标准化。在被问及中国市场份额和 AI 竞争力时，Tim Cook 倾向于给出模板化回答，但不会明显回避。",
        alignment: [
            {
                topic: "iPhone 销量增长",
                mgmt: "AI 功能正在推动强劲的换机需求，尤其是在 Pro 系列。",
                analyst: "中国市场 iPhone 份额持续被华为蚕食，AI 功能是否足以逆转？",
                gap: 42
            },
            {
                topic: "AI 竞争力",
                mgmt: "我们的设备端 AI 在隐私保护上具有独特优势，这是用户最看重的。",
                analyst: "Siri 的 AI 能力仍明显落后于 ChatGPT 和 Gemini，差距如何弥补？",
                gap: 55
            }
        ]
    },
    META: {
        promises: [
            { quarter: "2025 Q3", promise: "Llama 4 将在效率上超越 GPT-4", result: "partial", actual: "Llama 4 在多项基准上接近但未全面超越" },
            { quarter: "2025 Q4", promise: "AI广告推荐引擎带来 15% 的广告收入增长", result: "fulfilled", actual: "AI 推荐系统贡献了 18% 的广告收入增长" },
            { quarter: "2026 Q1", promise: "Reality Labs 亏损将开始收窄", result: "pending", actual: "亏损略有收窄但幅度有限" },
        ],
        deflectionScore: 38,
        deflectionLevel: "medium",
        deflectionDesc: "Meta 管理层在 AI 投资回报率问题上较为坦诚，但在 Reality Labs 亏损问题上倾向于强调长期愿景而非短期数字。",
        alignment: [
            {
                topic: "AI 投资回报",
                mgmt: "AI 已经在核心广告业务上产生了明确的正向 ROI。",
                analyst: "资本支出持续大幅增长，自由现金流何时能恢复到投资前水平？",
                gap: 38
            }
        ]
    },
    MSFT: {
        promises: [
            { quarter: "2025 Q3", promise: "Copilot 将贡献 Azure 收入增长的 5 个百分点", result: "fulfilled", actual: "Copilot 贡献约 6 个百分点的 Azure 增长" },
            { quarter: "2025 Q4", promise: "Azure 增速将重新加速至 30% 以上", result: "fulfilled", actual: "Azure 增长 32%，其中 AI 贡献 12 个百分点" },
            { quarter: "2026 Q1", promise: "AI 收入年化运行率将达到 $15B", result: "tracking", actual: "当前年化约 $13B，增速符合预期" },
        ],
        deflectionScore: 18,
        deflectionLevel: "low",
        deflectionDesc: "Microsoft 管理层以数据驱动的方式回答问题，Satya Nadella 在技术和商业指标上都给出具体数字，很少使用模糊措辞。是科技巨头中\"避重就轻度\"最低的公司之一。",
        alignment: [
            {
                topic: "AI 变现路径",
                mgmt: "Copilot 在企业端的付费转化率持续提升，ARPU 增长强劲。",
                analyst: "部分企业客户反馈 Copilot 使用率低于预期，粘性如何？",
                gap: 22
            }
        ]
    },
    AMZN: {
        promises: [
            { quarter: "2025 Q4", promise: "AWS 将在 AI 云服务市场份额中保持领先", result: "fulfilled", actual: "AWS AI 服务增长 55%，市场份额稳定在 31%" },
            { quarter: "2026 Q1", promise: "零售业务利润率将持续改善", result: "tracking", actual: "北美零售利润率提升至 6.2%，趋势向好" },
        ],
        deflectionScore: 30,
        deflectionLevel: "low",
        deflectionDesc: "Amazon 管理层在财务问题上较为直接，Andy Jassy 倾向于用具体业务数据回应质疑。在广告和AWS竞争问题上偶有模糊。",
        alignment: [
            {
                topic: "AWS vs Azure 竞争",
                mgmt: "我们在 AI 基础设施的广度和深度上保持领先优势。",
                analyst: "Azure AI 增速更快，自研芯片 Trainium 能否真正替代 NVIDIA？",
                gap: 35
            }
        ]
    },
    GOOGL: {
        promises: [
            { quarter: "2025 Q4", promise: "Gemini 将全面整合进 Google 产品线", result: "fulfilled", actual: "Gemini 已整合进 Search、Workspace、Cloud 等全线产品" },
            { quarter: "2026 Q1", promise: "Cloud 业务将实现持续盈利", result: "tracking", actual: "Google Cloud 连续三个季度盈利" },
        ],
        deflectionScore: 42,
        deflectionLevel: "medium",
        deflectionDesc: "Alphabet 管理层在 AI 搜索对广告收入的影响问题上有所回避，Sundar Pichai 倾向于强调用户体验提升而非直接回应商业影响。",
        alignment: [
            {
                topic: "AI 对搜索广告的冲击",
                mgmt: "AI Overview 提升了搜索质量，用户参与度在提升。",
                analyst: "AI 摘要减少了用户点击广告的频率，广告单价是否面临下行压力？",
                gap: 58
            }
        ]
    },
    AMD: {
        promises: [
            { quarter: "2025 Q3", promise: "MI300X 数据中心 GPU 收入将达到 $4B", result: "partial", actual: "收入约 $3.5B，低于指引但增速仍强" },
            { quarter: "2025 Q4", promise: "AI 芯片市场份额将提升至 15%", result: "tracking", actual: "估计份额约 12%，增长中但进度偏慢" },
        ],
        deflectionScore: 45,
        deflectionLevel: "medium",
        deflectionDesc: "AMD 管理层在市场份额对比 NVIDIA 的问题上有所回避，Lisa Su 倾向于强调绝对增长数字而非相对份额。",
        alignment: [
            {
                topic: "vs NVIDIA 竞争",
                mgmt: "我们在 AI 推理市场有独特的性价比优势。",
                analyst: "CUDA 生态的护城河如何突破？软件兼容性问题解决了多少？",
                gap: 62
            }
        ]
    }
};

const SIGNAL_FEED = [
    { type: "bullish", icon: "fa-arrow-up", title: "多因子信号：GOOGL 进入价值区间", desc: "PE 降至近3年低点，ROE 保持稳定，4家顶级基金增持", time: "2分钟前" },
    { type: "squeeze", icon: "fa-bolt", title: "轧空预警：GME 空头拥挤度飙升", desc: "Short Interest 达 28.5%，Reddit 讨论量激增 120%", time: "15分钟前" },
    { type: "chain", icon: "fa-project-diagram", title: "供应链联动：NVDA 财报超预期", desc: "台积电(TSM)、Super Micro(SMCI) 盘后跟涨 3-5%", time: "32分钟前" },
    { type: "policy", icon: "fa-landmark", title: "政策信号：清洁能源法案通过委员会", desc: "ENPH、FSLR 受益评分最高，补贴力度超预期", time: "1小时前" },
    { type: "bearish", icon: "fa-arrow-down", title: "叙事预警：TSLA 承诺兑现率持续下降", desc: "Robotaxi 再次推迟，管理层\"避重就轻指数\"升至 68", time: "2小时前" },
    { type: "bullish", icon: "fa-user-tie", title: "13F 信号：Renaissance 大幅增持 VST", desc: "增持 120%，Vistra 受益于 AI 数据中心电力需求", time: "3小时前" },
    { type: "policy", icon: "fa-user-shield", title: "议员交易：Pelosi 买入 NVDA 期权", desc: "金额 $1M-$5M，在 AI 法案投票前2周", time: "5小时前" },
    { type: "squeeze", icon: "fa-fire-alt", title: "情绪背离：INTC 基本面改善但情绪极差", desc: "情绪评分仅 18 vs 基本面 62，可能存在反转机会", time: "6小时前" },
];

// === CAN SLIM Data (Enhanced with Narrative + N-Factor Authenticity) ===
const CANSLIM_STOCKS = [
    {
        ticker: "NVDA", name: "NVIDIA Corp.", price: 875.50,
        narrative: "就像2007年的苹果发布iPhone一样，NVDA正在定义一个全新的计算时代。不同的是，iPhone当时还没有盈利证明，而NVDA已经用265%的EPS增长证明了AI需求是真金白银。机构正在疯狂扫货（5200只基金持有），唯一需要等待的是大盘给出绿灯。",
        historicalAnalogy: "类似 2004-2006 年的苹果：新产品周期开始 + 盈利爆发 + 机构蜂拥入场",
        C: { score: 95, epsGrowth: 265, detail: "当季EPS $5.16 vs 去年 $1.42，同比增长 265%。连续 4 季度加速增长。" },
        A: { score: 92, annualGrowth: [45, 62, 85, 122, 265], detail: "年度EPS: $2.1→$3.4→$6.3→$14.0→$20.8，5年复合增长58%。承诺兑现率: 92%。" },
        N: { score: 88, events: ["Blackwell Ultra架构发布", "数据中心AI推理芯片需求爆发", "股价创历史新高"], detail: "Blackwell Ultra 架构代表 AI 芯片技术突破，AI 推理市场是全新增长引擎。近52周新高。", authenticity: 92, authDetail: "真实性极高：Blackwell 芯片已有明确出货数据（Q4出货超预期15%），客户资本支出计划（MSFT/META/GOOGL合计$200B+）形成硬性需求验证。不是画饼，是已兑现的订单。" },
        S: { score: 82, volumeRatio: 1.8, floatShort: 1.2, detail: "近期成交量为50日均量的1.8倍，放量上涨。流通股空头占比仅1.2%，卖压极小。" },
        L: { score: 90, rsRating: 95, industryRank: 1, detail: "RS评级95（满分99），半导体行业排名第1。过去12个月跑赢95%的股票。" },
        I: { score: 88, fundCount: 5200, fundChange: "+180", detail: "5200只基金持有，较上季度增加180只。Citadel、Renaissance等顶级基金大幅增持。" },
        M: { score: 65, detail: "大盘处于震荡区间，VIX=18.5。纳斯达克在50日均线上方但弱于200日均线。市场环境中性偏弱。" },
        total: 88, aiInsight: "NVDA 在 CAN SLIM 7因子中表现极为突出，C/A/L 三项近乎满分。唯一风险是 M（大盘方向）评分偏低——欧奈尔的原则是大盘不好时减少仓位。AI 增强分析显示：管理层承诺兑现率92%（叙事验证器数据），且供应链上游（TSM、SMCI）同步走强，确认需求真实。建议：等待大盘确认上行趋势后入场。"
    },
    {
        ticker: "META", name: "Meta Platforms", price: 585.20,
        narrative: "META就像一个从ICU里走出来的运动员——2022年差点被宣判死亡，现在反而比受伤前更强。AI广告推荐引擎不是空话，已经直接在财报中兑现为18%的广告增长。聪明钱（Bridgewater、Pershing Square）正在大举买入，这通常意味着\"跌无可跌，只剩上涨\"。",
        historicalAnalogy: "类似 2013 年的 Netflix：从\"DVD公司\"到\"流媒体巨头\"的价值重估",
        C: { score: 85, epsGrowth: 35, detail: "当季EPS $6.20 vs 去年 $4.59，同比增长 35%。AI广告推荐引擎持续推动增长。" },
        A: { score: 88, annualGrowth: [-2, 15, 45, 72, 35], detail: "年度EPS从2022年低谷强劲反弹。5年EPS: $10.1→$8.6→$14.9→$22.1→$25.8。" },
        N: { score: 82, events: ["Llama 4开源模型发布", "AI广告推荐系统升级", "Reels营收增速翻倍"], detail: "开源AI战略形成生态护城河，AI推荐系统是核心新产品驱动力。", authenticity: 78, authDetail: "中高真实性：AI广告推荐引擎已有明确营收贡献（+18%），但Llama开源模型的商业化路径仍不清晰。Reality Labs每季度$4B+亏损是真实风险。Reels增长是已验证的事实。" },
        S: { score: 78, volumeRatio: 1.3, floatShort: 0.8, detail: "成交量温和放大，流通股空头占比极低(0.8%)。股票回购减少了流通股供给。" },
        L: { score: 85, rsRating: 88, industryRank: 1, detail: "RS评级88，社交媒体行业领导者。过去12个月跑赢88%的股票。" },
        I: { score: 90, fundCount: 4800, fundChange: "+220", detail: "4800只基金持有，增加220只。Bridgewater、Pershing Square 等价值型基金新增持仓。" },
        M: { score: 65, detail: "同上，大盘环境中性偏弱。" },
        total: 84, aiInsight: "META 在 CAN SLIM 框架下表现稳健，I（机构持仓）评分最高，说明聪明钱看好。AI增强分析：Llama开源策略虽然短期不赚钱，但构建了开发者生态（类似Android策略）。广告AI推荐引擎是真正的'N'因子——它不是概念炒作，已经在财报中兑现为18%的广告增长。Reality Labs亏损是主要拖累。"
    },
    {
        ticker: "TSM", name: "台积电 TSMC", price: 185.30,
        narrative: "如果AI是新时代的石油，那台积电就是唯一的炼油厂。NVDA、苹果、AMD都得排队找它生产芯片——这种垄断地位比任何财务指标都重要。巴菲特都在买，5年后回头看今天的价格，可能就像2015年看亚马逊一样便宜。唯一的风险是地缘政治，但美国/日本建厂正在对冲这个风险。",
        historicalAnalogy: "类似 2010 年代的 ASML：半导体不可替代的\"卖铲人\"",
        C: { score: 90, epsGrowth: 58, detail: "当季EPS同比增长58%，AI芯片代工需求爆发，先进制程(3nm/5nm)产能满载。" },
        A: { score: 85, annualGrowth: [25, -8, 18, 35, 58], detail: "2023年低谷后V型反弹。5年趋势：$5.2→$6.5→$5.9→$7.0→$9.5→$15.0。" },
        N: { score: 92, events: ["2nm制程2025量产", "日本/美国建厂推进", "CoWoS先进封装产能扩张3倍"], detail: "2nm技术领先全球，CoWoS封装是AI芯片瓶颈的关键解决方案，属于革命性新产品。", authenticity: 95, authDetail: "真实性极高：2nm制程有明确的客户tape-out记录，CoWoS产能扩张有实际资本支出验证。日本熊本厂已投产，美国亚利桑那厂建设进度可通过卫星图验证。所有\"新\"都有实物证据。" },
        S: { score: 75, volumeRatio: 1.4, floatShort: 0.5, detail: "ADR成交量稳步增长，空头极少。但总流通股较大，不属于紧缺型。" },
        L: { score: 88, rsRating: 91, industryRank: 2, detail: "RS评级91，半导体行业第2（仅次于NVDA）。过去12个月跑赢91%的股票。" },
        I: { score: 92, fundCount: 2800, fundChange: "+150", detail: "2800只基金持有。Berkshire Hathaway、Tiger Global 均为重仓股。巴菲特的加持是重要信号。" },
        M: { score: 65, detail: "同上，大盘环境中性偏弱。" },
        total: 86, aiInsight: "TSM 的'N'因子是所有候选股中最强的——2nm制程和CoWoS封装是真正的技术护城河，不是营销口号。AI供应链分析显示：NVDA、AAPL、AMD三大客户订单同步增长，形成罕见的需求共振。唯一风险：地缘政治（台海）。CAN SLIM框架下，建议以TSM为'供应链联动'核心配置。"
    },
    {
        ticker: "AVGO", name: "Broadcom Inc.", price: 195.80,
        narrative: "AVGO做的事情很聪明：它不跟NVDA正面竞争卖通用GPU，而是帮Google和Meta量身定制专属AI芯片。这就像裁缝 vs 成衣店——虽然规模小，但利润率更高、客户粘性更强。再加上VMware这笔收购让它拥有了稳定的软件订阅收入，攻守兼备。",
        historicalAnalogy: "类似 2015 年的 Adobe：从卖软件转向订阅制的价值跃升",
        C: { score: 88, epsGrowth: 45, detail: "当季EPS同比增长45%，AI网络芯片+VMware整合双轮驱动。" },
        A: { score: 82, annualGrowth: [12, 15, 22, 30, 45], detail: "年度EPS连续5年加速增长，收购VMware后软件业务占比提升至40%。" },
        N: { score: 78, events: ["定制AI芯片(ASIC)获Google/Meta大单", "VMware云化整合", "近52周新高"], detail: "定制AI芯片业务是新的增长极，为科技巨头量身定制AI加速器。", authenticity: 75, authDetail: "中高真实性：Google TPU和Meta MTIA的订单有财报验证，但具体金额未披露。VMware整合进度可通过客户续约率验证（目前良好）。ASIC业务的天花板尚不明确。" },
        S: { score: 72, volumeRatio: 1.2, floatShort: 1.5, detail: "成交量平稳，流通股供给因回购减少。但债务较高（VMware收购）。" },
        L: { score: 82, rsRating: 85, industryRank: 3, detail: "RS评级85，半导体行业第3。AI ASIC龙头地位巩固。" },
        I: { score: 85, fundCount: 3200, fundChange: "+95", detail: "3200只基金持有。定制AI芯片赛道获得越来越多长线基金关注。" },
        M: { score: 65, detail: "同上，大盘环境中性偏弱。" },
        total: 80, aiInsight: "AVGO的独特价值在于'定制AI芯片'赛道——Google的TPU、Meta的MTIA都依赖Broadcom设计。这是一个NVDA无法完全替代的差异化市场。VMware整合带来的软件复购收入使EPS增长更具可持续性。CAN SLIM角度：C/A连续加速是强信号。"
    },
    {
        ticker: "LLY", name: "Eli Lilly", price: 820.50,
        narrative: "想象一下：全球有6.5亿肥胖人口，而LLY的减肥药是第一个真正有效的解决方案。这不是\"再来一个减肥概念\"——它已经让临床试验中的患者平均减重22%。现在它还在治疗糖尿病、睡眠呼吸暂停、甚至阿尔茨海默。这就像拥有一把万能钥匙，每开一扇门就是一个千亿市场。",
        historicalAnalogy: "类似 1999 年的辉瑞发现万艾可：一个药物开启多个巨大市场",
        C: { score: 92, epsGrowth: 82, detail: "当季EPS同比增长82%，GLP-1减肥药Mounjaro/Zepbound销售爆发。" },
        A: { score: 78, annualGrowth: [8, -5, 12, 35, 82], detail: "2024年起因GLP-1药物进入指数级增长。年度EPS加速明显。" },
        N: { score: 95, events: ["Zepbound获批新适应症(睡眠呼吸暂停)", "口服GLP-1进入III期临床", "阿尔茨海默药donanemab获批"], detail: "GLP-1赛道是近10年最大的医药创新。口服版GLP-1可能将市场扩大10倍。多个重磅新药同时推进。", authenticity: 90, authDetail: "极高真实性：Mounjaro/Zepbound的销售数据是硬指标（季度$3B+），FDA已批准。口服版GLP-1 III期临床数据将在2026年Q2发布。donanemab已获FDA批准。唯一不确定性：产能能否跟上需求。" },
        S: { score: 70, volumeRatio: 1.1, floatShort: 0.8, detail: "成交量正常，流通股规模大。机构持仓集中度高。" },
        L: { score: 85, rsRating: 87, industryRank: 1, detail: "RS评级87，制药行业绝对领导者。GLP-1赛道无可争议的龙头。" },
        I: { score: 88, fundCount: 4100, fundChange: "+135", detail: "4100只基金持有，医疗基金几乎全部超配。" },
        M: { score: 65, detail: "同上。" },
        total: 83, aiInsight: "LLY的'N'因子是现有CAN SLIM候选股中最具颠覆性的——GLP-1药物正在创造一个$100B级别的全新市场。口服版GLP-1如果成功，将是从'注射'到'口服'的范式转换（类似智能手机替代功能机）。AI新闻分析显示FDA审批概率>75%。风险：竞争加剧（NOVO、AMGN）和产能瓶颈。"
    },
    {
        ticker: "PLTR", name: "Palantir Technologies", price: 78.50,
        narrative: "PLTR是一只让人又爱又恨的股票。爱它是因为AIP平台确实在帮企业和政府部署AI——这是真需求。恨它是因为PE=180倍，社交媒体上满是MEME式喊单，内部人还在不断卖出。简单说：产品是好产品，但价格已经透支了太多未来。就像2000年的思科——公司是好公司，但估值太疯狂了。",
        historicalAnalogy: "警示案例 — 类似 2000 年的 Cisco：伟大的公司，但在 PE=130 时买入仍亏了20年",
        C: { score: 75, epsGrowth: 42, detail: "当季EPS $0.11 vs 去年 $0.08，增长42%。但绝对值仍然较低。" },
        A: { score: 62, annualGrowth: [-100, -50, 5, 25, 42], detail: "刚从亏损转盈利不久，年度增长趋势向好但历史短。" },
        N: { score: 85, events: ["AIP平台获大量企业客户", "政府AI安全合规领先", "获新军方合同"], detail: "AIP平台是企业AI部署的新范式，政府安全认证是独特护城河。", authenticity: 60, authDetail: "中等真实性：AIP平台有客户案例但\"大量企业客户\"的说法缺乏具体数字（管理层回避披露AIP独立ARR）。政府合同是真实的但高度依赖政策。军方合同金额通常被夸大宣传。需要更多季度数据验证增长可持续性。" },
        S: { score: 55, volumeRatio: 2.2, floatShort: 3.5, detail: "成交量极高但内部人持续减持。空头占比3.5%值得关注。散户交易占比偏高。" },
        L: { score: 92, rsRating: 96, industryRank: 1, detail: "RS评级96，AI/数据分析行业第1。过去12个月涨幅185%。" },
        I: { score: 58, fundCount: 1800, fundChange: "+45", detail: "基金持仓在增加但增速放缓。高估值让很多价值型基金望而却步。" },
        M: { score: 65, detail: "同上。" },
        total: 68, aiInsight: "PLTR 呈现典型的CAN SLIM矛盾信号：L评分极高（动量强）但A评分偏低（盈利历史短），S评分最差（内部人减持+散户占比高）。欧奈尔会说这是'投机性成长股'。AI情绪分析显示：社交媒体热度92分但讨论质量仅58分（大量情绪贴缺乏逻辑支撑）。PE=180x，需要极高增长才能撑住。谨慎看待。"
    },
    {
        ticker: "CRWD", name: "CrowdStrike", price: 345.20,
        narrative: "还记得2024年那次全球性的IT宕机事件吗？很多人以为CrowdStrike完了。但事实正好相反——就像银行经历一次抢劫后安保反而更严密一样，CrowdStrike的客户发现切换安全厂商的成本太高了，反而续约率更高。聪明钱（Tiger Global +45%）已经悄悄进场了。这是经典的\"别人恐惧时贪婪\"的机会。",
        historicalAnalogy: "类似 2017 年 Equifax 数据泄露后的反弹：危机变成护城河",
        C: { score: 80, epsGrowth: 28, detail: "当季EPS同比增长28%。2024年宕机事件影响正在消退，客户流失率低于预期。" },
        A: { score: 75, annualGrowth: [35, 45, 22, -5, 28], detail: "2024年因宕机事件出现增速放缓，但2025年已强劲反弹。" },
        N: { score: 72, events: ["Charlotte AI安全助手发布", "宕机事件后安全机制全面升级", "扩展至身份安全领域"], detail: "Charlotte AI是网络安全领域首个AI原生助手。身份安全是新增长点。", authenticity: 72, authDetail: "中高真实性：Charlotte AI已有客户部署案例，但AI安全助手的实际效果尚需更多季度数据。安全机制升级是被动改进而非主动创新。身份安全领域的市场份额仍需验证。宕机事件的负面影响正在消退是可验证事实。" },
        S: { score: 75, volumeRatio: 1.3, floatShort: 2.8, detail: "成交量恢复正常，空头占比2.8%反映部分投资者仍有顾虑。" },
        L: { score: 78, rsRating: 80, industryRank: 2, detail: "RS评级80，网络安全行业第2。股价已从宕机低点反弹65%。" },
        I: { score: 82, fundCount: 2600, fundChange: "+88", detail: "Tiger Global大幅增持45%，多家精品基金新建仓。" },
        M: { score: 65, detail: "同上。" },
        total: 75, aiInsight: "CRWD 是经典的'逆境反弹'型CAN SLIM候选。宕机事件类似2017年Equifax数据泄露——短期重创但长期反而加固了市场地位（因为切换安全厂商的成本极高）。AI叙事分析：管理层在应对危机后的透明度显著提高，'避重就轻指数'从事件前的45降至25。13F数据显示聪明钱正在悄悄加仓。"
    },
    {
        ticker: "GOOGL", name: "Alphabet Inc.", price: 172.80,
        narrative: "Google现在就像一个被低估的优等生——PE只有22倍，是科技巨头里最便宜的。市场在担心AI搜索会毁掉广告收入，但这可能是过度恐慌。而且别忘了Waymo——这是一个被藏在财报里的\"隐形金矿\"，自动驾驶出租车的商业化一旦规模化，价值可能超过YouTube。适合稳健型投资者作为\"底仓\"配置。",
        historicalAnalogy: "类似 2016 年的亚马逊：市场质疑AWS能否盈利，结果AWS变成了利润引擎",
        C: { score: 78, epsGrowth: 22, detail: "当季EPS同比增长22%。搜索广告稳健，Cloud增速加快，YouTube维持增长。" },
        A: { score: 80, annualGrowth: [15, -5, 25, 30, 22], detail: "年度EPS稳定增长。$4.5→$5.1→$4.8→$6.0→$7.8→$9.5。" },
        N: { score: 70, events: ["Gemini 2.0整合进全线产品", "AI Overview改变搜索体验", "Waymo自动驾驶扩展至新城市"], detail: "Gemini是核心新产品，但AI对搜索广告模式的影响仍不确定。Waymo是隐藏的'N'因子。", authenticity: 68, authDetail: "中等真实性：Gemini整合是真实的但竞争力对比GPT-4/Claude仍有争议。AI Overview的用户体验改善有数据支撑，但广告影响尚不明确。Waymo的运营数据（日订单量10万+）可验证，是被低估的真实资产。" },
        S: { score: 72, volumeRatio: 1.0, floatShort: 0.5, detail: "成交量平稳，空头极少。大盘股流通性好但缺乏供需紧张的催化。" },
        L: { score: 68, rsRating: 72, industryRank: 3, detail: "RS评级72，互联网行业第3（落后于META和AMZN）。表现中规中矩。" },
        I: { score: 85, fundCount: 5500, fundChange: "+110", detail: "5500只基金持有，机构覆盖极广。Citadel、Renaissance 等增持。" },
        M: { score: 65, detail: "同上。" },
        total: 74, aiInsight: "GOOGL 在 CAN SLIM 中呈现'价值+质量'特征，而非典型的高成长型。PE=22是科技巨头中最低的，这不完全是好事——市场在定价AI搜索的风险。AI叙事分析显示：分析师对'AI Overview对广告收入的冲击'这个问题的追问频率很高（语义偏移58%），但管理层的回答偏模糊。适合作为CAN SLIM组合中的'防守型配置'。"
    }
];

const CANSLIM_MARKET = {
    sp500Trend: "中性",
    sp500Above50ma: true,
    sp500Above200ma: false,
    distributionDays: 4,
    advDecline: 0.92,
    vix: 18.5,
    putCallRatio: 1.28,
    status: "观望",
    statusColor: "var(--accent-orange)",
    desc: "S&P 500 在50日均线上方但弱于200日均线。分发日(放量下跌)已累积4天。Put/Call=1.28显示极度恐惧。欧奈尔建议：当前环境下降低仓位至50-75%，只买最强的CAN SLIM候选。"
};

// === Weinstein Stage Analysis Data ===
const WEINSTEIN_STOCKS = [
    {
        ticker: "NVDA", stage: 2, stageLabel: "上升期", stageColor: "var(--accent-green)",
        weekMA30: "上方", volumeTrend: "放量上攻", weeklyBreakout: true,
        detail: "股价稳定运行在30周均线上方，均线持续上行。成交量在突破关键阻力位时显著放大。经典的Stage 2上升趋势。",
        action: "持有/加仓", actionColor: "var(--accent-green)",
        vcpPattern: false
    },
    {
        ticker: "META", stage: 2, stageLabel: "上升期", stageColor: "var(--accent-green)",
        weekMA30: "上方", volumeTrend: "温和放量", weeklyBreakout: false,
        detail: "股价持续位于30周均线上方，均线斜率为正。成交量模式健康——上涨放量、回调缩量。",
        action: "持有", actionColor: "var(--accent-green)",
        vcpPattern: false
    },
    {
        ticker: "TSM", stage: 2, stageLabel: "上升期", stageColor: "var(--accent-green)",
        weekMA30: "上方", volumeTrend: "放量突破", weeklyBreakout: true,
        detail: "近期放量突破$180阻力位，30周均线加速上行。ADR成交量创6个月新高。Stage 2确认。",
        action: "买入/加仓", actionColor: "var(--accent-green)",
        vcpPattern: true
    },
    {
        ticker: "AVGO", stage: 2, stageLabel: "上升期(后段)", stageColor: "var(--accent-green)",
        weekMA30: "上方", volumeTrend: "正常", weeklyBreakout: false,
        detail: "处于Stage 2后段，股价距30周均线较远（偏离度18%）。需警惕回调到均线附近的风险。",
        action: "持有/收紧止损", actionColor: "var(--accent-orange)",
        vcpPattern: false
    },
    {
        ticker: "LLY", stage: 2, stageLabel: "上升期", stageColor: "var(--accent-green)",
        weekMA30: "上方", volumeTrend: "缩量回调中", weeklyBreakout: false,
        detail: "股价在30周均线上方回调，成交量明显萎缩——这是健康的\"休息\"信号。等待缩量完成后可能形成VCP形态。",
        action: "观望/等VCP突破", actionColor: "var(--accent-orange)",
        vcpPattern: true
    },
    {
        ticker: "PLTR", stage: 2, stageLabel: "上升期(过热)", stageColor: "var(--accent-orange)",
        weekMA30: "远上方", volumeTrend: "异常放量", weeklyBreakout: true,
        detail: "股价远离30周均线（偏离度45%），伴随散户异常放量。过热的Stage 2，类似2021年MEME股特征。",
        action: "谨慎/勿追高", actionColor: "var(--accent-red)",
        vcpPattern: false
    },
    {
        ticker: "CRWD", stage: 1, stageLabel: "筑底期→上升期", stageColor: "var(--accent-blue)",
        weekMA30: "正在穿越", volumeTrend: "底部放量", weeklyBreakout: false,
        detail: "股价正在从Stage 1(筑底)向Stage 2(上升)过渡——30周均线从下降转平。底部成交量放大是积极信号。",
        action: "关注/等确认", actionColor: "var(--accent-blue)",
        vcpPattern: false
    },
    {
        ticker: "GOOGL", stage: 2, stageLabel: "上升期(弱)", stageColor: "var(--accent-orange)",
        weekMA30: "上方(微弱)", volumeTrend: "平淡", weeklyBreakout: false,
        detail: "勉强维持在30周均线上方，均线斜率趋平。属于\"弱势Stage 2\"——如果大盘走弱，可能滑入Stage 3。",
        action: "持有/缩小仓位", actionColor: "var(--accent-orange)",
        vcpPattern: false
    },
    {
        ticker: "INTC", stage: 1, stageLabel: "筑底期", stageColor: "var(--text-muted)",
        weekMA30: "下方(接近)", volumeTrend: "底部放量", weeklyBreakout: false,
        detail: "经历了漫长的Stage 4下降后，正在Stage 1筑底。30周均线转平是积极信号。需等待放量突破均线确认转势。",
        action: "观察/未到买点", actionColor: "var(--text-muted)",
        vcpPattern: false
    },
    {
        ticker: "ENPH", stage: 4, stageLabel: "下降期", stageColor: "var(--accent-red)",
        weekMA30: "下方", volumeTrend: "放量下跌", weeklyBreakout: false,
        detail: "股价持续运行在30周均线下方，均线持续下行。典型的Stage 4下降趋势。虽然政策利好，但技术面尚未确认转势。",
        action: "回避/勿抄底", actionColor: "var(--accent-red)",
        vcpPattern: false
    },
];

// === Minervini VCP (Volatility Contraction Pattern) Data ===
const MINERVINI_VCP = [
    {
        ticker: "TSM", name: "台积电", price: 185.30,
        trendTemplate: true, // Minervini Trend Template check
        above50ma: true, above150ma: true, above200ma: true,
        ma50AboveMa200: true, ma200Rising: true,
        high52w: 192.50, low52w: 105.20,
        currentVsHigh: -3.7, // % from 52w high
        currentVsLow: 76.1, // % from 52w low
        rs: 91,
        vcpContractions: [
            { width: "15%", duration: "4周" },
            { width: "8%", duration: "2周" },
            { width: "3.5%", duration: "1周" },
        ],
        pivotPoint: 188.50,
        pivotVolume: "需>50日均量1.5倍",
        status: "approaching", // approaching, triggered, watching
        statusLabel: "接近枢轴点",
        detail: "经典的3次收缩VCP：波幅从15%→8%→3.5%逐步收窄，伴随成交量萎缩。当前距离枢轴点$188.50仅差1.7%。一旦放量突破，是高概率买入信号。",
        score: 92
    },
    {
        ticker: "LLY", name: "Eli Lilly", price: 820.50,
        trendTemplate: true,
        above50ma: true, above150ma: true, above200ma: true,
        ma50AboveMa200: true, ma200Rising: true,
        high52w: 875.00, low52w: 545.00,
        currentVsHigh: -6.2,
        currentVsLow: 50.5,
        rs: 87,
        vcpContractions: [
            { width: "18%", duration: "6周" },
            { width: "10%", duration: "3周" },
            { width: "5%", duration: "2周" },
        ],
        pivotPoint: 845.00,
        pivotVolume: "需>50日均量1.4倍",
        status: "watching",
        statusLabel: "VCP形成中",
        detail: "GLP-1减肥药催化下形成教科书级VCP：从$875高点回调后，波幅连续收缩（18%→10%→5%）。第三次收缩正在进行中。等待放量突破$845枢轴。",
        score: 88
    },
    {
        ticker: "CRWD", name: "CrowdStrike", price: 345.20,
        trendTemplate: false, // Not yet meeting all trend template criteria
        above50ma: true, above150ma: true, above200ma: false,
        ma50AboveMa200: false, ma200Rising: false,
        high52w: 398.00, low52w: 215.00,
        currentVsHigh: -13.3,
        currentVsLow: 60.6,
        rs: 80,
        vcpContractions: [
            { width: "22%", duration: "8周" },
            { width: "12%", duration: "4周" },
        ],
        pivotPoint: 365.00,
        pivotVolume: "需>50日均量2.0倍（因宕机事件需更强确认）",
        status: "watching",
        statusLabel: "趋势模板未完全满足",
        detail: "股价已从宕机低点强劲反弹，但200日均线尚未转升。VCP仅完成2次收缩，波幅收窄趋势良好。需等待200MA转升且第3次收缩完成后才是高质量买点。",
        score: 72
    },
    {
        ticker: "AVGO", name: "Broadcom", price: 195.80,
        trendTemplate: true,
        above50ma: true, above150ma: true, above200ma: true,
        ma50AboveMa200: true, ma200Rising: true,
        high52w: 205.00, low52w: 122.50,
        currentVsHigh: -4.5,
        currentVsLow: 59.8,
        rs: 85,
        vcpContractions: [
            { width: "12%", duration: "3周" },
            { width: "6%", duration: "2周" },
            { width: "2.8%", duration: "1周" },
        ],
        pivotPoint: 201.00,
        pivotVolume: "需>50日均量1.3倍",
        status: "approaching",
        statusLabel: "接近枢轴点",
        detail: "趋势模板完全满足。VCP形成3次收缩，波幅收窄至2.8%——这是极度紧缩的信号，预示即将做出方向选择。枢轴点$201仅差2.7%。高质量设置。",
        score: 90
    },
    {
        ticker: "META", name: "Meta", price: 585.20,
        trendTemplate: true,
        above50ma: true, above150ma: true, above200ma: true,
        ma50AboveMa200: true, ma200Rising: true,
        high52w: 602.00, low52w: 390.00,
        currentVsHigh: -2.8,
        currentVsLow: 50.1,
        rs: 88,
        vcpContractions: [
            { width: "8%", duration: "2周" },
            { width: "4%", duration: "1周" },
        ],
        pivotPoint: 598.00,
        pivotVolume: "需>50日均量1.2倍",
        status: "approaching",
        statusLabel: "浅幅VCP",
        detail: "因为趋势极强，VCP仅有2次收缩且幅度较浅（8%→4%）。这类'紧凑型VCP'在强势股中常见，通常预示持续上涨。距枢轴$598差2.1%。",
        score: 85
    },
];

// === Duan Yongping Value Framework Data ===
const DYP_STOCKS = [
    {
        ticker: "AAPL", name: "Apple Inc.", price: 198.50,
        totalScore: 91,
        verdict: "典型段永平风格标的",
        narrative: "苹果是段永平最推崇的公司之一——他本人就是苹果的长期持有者。商业模式极其简单：卖硬件+服务生态锁定用户。Tim Cook虽不如乔布斯有魅力，但在运营和股东回报上堪称完美。20亿活跃设备的生态护城河，不是任何竞争者能轻易打破的。唯一问题：现在估值不算便宜。",
        business: {
            score: 95,
            model: "硬件+服务生态",
            moat: "20亿活跃设备的封闭生态系统，用户转换成本极高",
            oneLiner: "卖手机电脑+从生态系统里抽成",
            understandable: true,
            detail: "苹果的生意用一句话就能说清：做最好的消费电子产品，然后从生态里持续赚钱。App Store 30%抽成、iCloud订阅、Apple Music、Apple Pay——每一个都是\"睡后收入\"。段永平最看重的就是这种\"简单到傻瓜都能经营\"的商业模式。"
        },
        culture: {
            score: 88,
            ceoIntegrity: 92,
            shareholderFriendly: 95,
            longTermThinking: 85,
            detail: "Tim Cook 是极其诚信和股东友好的CEO：每年$900亿回购+持续提升分红。在隐私保护上选择与用户站在一起而非追逐短期广告收入——这是长期主义的体现。扣分项：在中国市场的态度有时显得摇摆。"
        },
        margin: {
            score: 82,
            currentPE: 28.5,
            historicalPE: "22-35",
            fairValue: 175,
            marginOfSafety: -13.4,
            detail: "当前PE 28.5x处于历史中位偏高。段永平的标准是\"好价格才出手\"——目前苹果不算贵但也不便宜。如果回调到$170-175区间(PE~24x)，安全边际会更充足。段永平本人在$100以下开始大量买入。"
        },
        holding: {
            score: 98,
            yearsHeld: "段永平持有超10年",
            buybackYield: 3.8,
            divGrowthYears: 12,
            detail: "这是段永平最核心的持仓之一。苹果连续12年提高分红，年均回购$900亿。做时间的朋友——过去10年苹果总回报超过800%。段永平的忠告：\"如果你不愿意持有一只股票10年，那就不要持有10分钟。\""
        },
        aiInsight: "AAPL 是段永平投资哲学的完美体现：简单易懂的商业模式、极其优秀的企业文化、强大的回购+分红。唯一不足是当前估值不在\"击球区\"。AI建议：耐心等待回调到$170-175区间，或者在当前价位小仓位建仓后逢低加仓。段永平式投资的关键是\"不追高\"。"
    },
    {
        ticker: "GOOGL", name: "Alphabet Inc.", price: 172.80,
        totalScore: 84,
        verdict: "高性价比的优质标的",
        narrative: "Google是一台印钞机——搜索广告的商业模式简单到不能再简单：用户搜索，广告商付费。但段永平可能会问：AI会不会颠覆这个模式？答案是不确定的。好消息是PE只有22倍，是科技巨头里最便宜的。而且YouTube和Cloud都在高速增长。这是一个\"不完美但便宜\"的选择。",
        business: {
            score: 85,
            model: "广告+云计算",
            moat: "搜索引擎90%市场份额，YouTube视频垄断，Android生态",
            oneLiner: "用户搜索/看视频，广告商付费",
            understandable: true,
            detail: "Google的核心生意极其简单：提供免费搜索和视频服务，然后卖广告。全球90%搜索份额+YouTube=不可替代的流量入口。段永平会认可这种\"收税站\"模式。但AI搜索对广告模式的冲击是一个需要观察的不确定因素。"
        },
        culture: {
            score: 78,
            ceoIntegrity: 80,
            shareholderFriendly: 75,
            longTermThinking: 82,
            detail: "Sundar Pichai 领导下的Google技术实力强大，但在股东回报上不如苹果（回购力度偏小、分红刚开始）。双层股权结构让创始人保持控制权——这是一把双刃剑。好处是长期思维，坏处是小股东话语权有限。"
        },
        margin: {
            score: 90,
            currentPE: 22.1,
            historicalPE: "20-35",
            fairValue: 190,
            marginOfSafety: 9.1,
            detail: "PE 22.1x是科技巨头中最低的，接近历史底部区间。以段永平的标准，这是难得的\"好价格\"区间。如果AI搜索的担忧被证明是过度悲观的，当前价位可能是绝佳买点。安全边际约9%。"
        },
        holding: {
            score: 82,
            yearsHeld: "中长期标的",
            buybackYield: 1.5,
            divGrowthYears: 1,
            detail: "2024年刚开始分红，回购力度在增加。Google的问题是把大量利润投入\"登月计划\"（Waymo、量子计算等），短期影响自由现金流。段永平可能会说：\"这些投资如果成功回报巨大，但确定性不够。\""
        },
        aiInsight: "GOOGL 在段永平框架下是\"安全边际\"得分最高的科技巨头——PE 22x接近历史底部。商业模式清晰简单（搜索卖广告），护城河深。主要风险是AI对搜索广告的长期影响——段永平会说\"看不懂的部分要打折扣\"。AI建议：当前价位可以开始建仓，但要理解AI搜索的不确定性。"
    },
    {
        ticker: "BRK.B", name: "Berkshire Hathaway", price: 458.20,
        totalScore: 89,
        verdict: "\"买入并忘记\"的终极标的",
        narrative: "巴菲特的伯克希尔是段永平最尊敬的公司——不是因为股价涨得多，而是因为巴菲特的\"owner mentality\"（企业主心态）和段永平的投资哲学如出一辙。买BRK.B等于买入了一篮子优质企业+$1680亿现金储备+Warren Buffett和Greg Abel的管理智慧。唯一风险：后巴菲特时代。",
        business: {
            score: 88,
            model: "保险浮存金+多元企业集团",
            moat: "保险浮存金提供零成本杠杆，旗下企业涵盖铁路、能源、消费品",
            oneLiner: "用保险的钱去投资和收购好公司",
            understandable: true,
            detail: "伯克希尔的模式是：通过保险业务（GEICO等）收取保费，用这些\"免费的钱\"去投资股票和收购企业。这是巴菲特和段永平共同推崇的\"永久资本\"模式——没有赎回压力，可以真正做长期投资。"
        },
        culture: {
            score: 98,
            ceoIntegrity: 99,
            shareholderFriendly: 95,
            longTermThinking: 99,
            detail: "巴菲特是企业文化的终极标杆：每年致股东信、从不忽悠、不做华而不实的并购、合理薪酬。Greg Abel作为继任者延续了这种文化。段永平说过\"跟对人\"——BRK.B的管理团队是最值得信赖的。"
        },
        margin: {
            score: 80,
            currentPE: 12.5,
            historicalPE: "10-18",
            fairValue: 480,
            marginOfSafety: 4.5,
            detail: "PE 12.5x处于历史合理区间，$1680亿现金储备提供了额外的安全垫。巴菲特自己的回购标准是PB<1.5x（目前PB=1.6x）。段永平的评价：\"BRK永远不会让你暴富，但也永远不会让你亏大钱。\""
        },
        holding: {
            score: 95,
            yearsHeld: "终身持有标的",
            buybackYield: 2.1,
            divGrowthYears: 0,
            detail: "不分红但通过回购回馈股东——这是巴菲特认为更税效的方式。段永平和巴菲特在\"不分红、靠回购\"这个理念上完全一致。这是一个你可以买了放20年不用管的股票。"
        },
        aiInsight: "BRK.B 在企业文化评分上是满分级别——巴菲特+Abel的组合是段永平最推崇的管理团队。商业模式虽然复杂（多元集团），但核心逻辑简单（用保险浮存金投资好公司）。AI建议：任何时候买入BRK.B都不会太错，但最佳买点是在大盘恐慌时——巴菲特的$1680亿现金就是为了等那个时刻。"
    },
    {
        ticker: "MSFT", name: "Microsoft Corp.", price: 415.30,
        totalScore: 86,
        verdict: "优秀但估值需关注",
        narrative: "微软在Satya Nadella手下完成了科技史上最成功的转型——从卖Windows许可证变成了云+AI的订阅制帝国。Azure和Microsoft 365的订阅收入就像\"高速公路收费站\"，每个月自动到账。Copilot AI正在给这个收费站再加一条新的收费通道。段永平会欣赏这种\"又宽又深\"的护城河。",
        business: {
            score: 92,
            model: "云计算+SaaS订阅",
            moat: "企业IT基础设施深度绑定，Office/Azure/GitHub形成完整生态",
            oneLiner: "企业用微软的云和办公软件，按月交钱",
            understandable: true,
            detail: "微软的生意模式现在非常简单：企业需要办公软件（Microsoft 365）和云服务（Azure），这两样都是按月/年订阅。客户一旦用上就很难切换。Copilot AI把ARPU往上推——从$12.5/月变成$42.5/月。这是段永平最喜欢的\"躺着赚钱\"模式。"
        },
        culture: {
            score: 90,
            ceoIntegrity: 92,
            shareholderFriendly: 88,
            longTermThinking: 92,
            detail: "Satya Nadella 是过去十年最优秀的科技CEO之一——他把微软从\"傲慢的垄断者\"变成了\"谦逊的合作伙伴\"。对OpenAI的投资展现了战略眼光。股东回报持续提升（分红+回购）。段永平会说：\"这个CEO值得信赖。\""
        },
        margin: {
            score: 72,
            currentPE: 35.2,
            historicalPE: "25-40",
            fairValue: 380,
            marginOfSafety: -9.3,
            detail: "PE 35.2x处于历史中位偏高。以段永平\"好公司+好价格\"的标准，当前估值谈不上便宜。AI资本支出激增（年$500亿+）也在消耗现金流。如果能回调到PE 28-30x区间会更理想。"
        },
        holding: {
            score: 90,
            yearsHeld: "长期配置标的",
            buybackYield: 1.8,
            divGrowthYears: 22,
            detail: "连续22年提高分红，\"股息贵族\"之一。回购规模持续增长。微软的订阅制模式保证了稳定的现金流，是\"做时间的朋友\"的好选择。"
        },
        aiInsight: "MSFT 商业模式和企业文化都是顶级水平，Nadella治下的微软是段永平会欣赏的那种\"好公司\"。但当前PE 35x意味着安全边际不足。AI建议：这是一个长期必配的标的，但段永平式投资强调\"等好价格\"——建议在$350-370区间（PE 28-30x）加大仓位。现在可以小仓位持有。"
    },
    {
        ticker: "KO", name: "Coca-Cola", price: 62.80,
        totalScore: 85,
        verdict: "段永平+巴菲特双认证",
        narrative: "可口可乐是\"看得懂的生意\"的终极代表——全世界的人都要喝水和饮料，而可口可乐卖的本质上是糖水+品牌。巴菲特持有了38年，段永平也多次推荐。这种公司不会让你暴富，但它就像一台永不停转的印钞机：每天卖出22亿份饮料，每年稳定提高分红。这是\"确定性\"的代名词。",
        business: {
            score: 98,
            model: "品牌授权+浓缩液销售",
            moat: "全球第一饮料品牌，200+国家分销网络，消费者心智垄断",
            oneLiner: "把糖水卖到全世界每个角落",
            understandable: true,
            detail: "可口可乐的生意简单到小学生都懂：做浓缩液卖给装瓶厂，装瓶厂做出饮料卖给消费者。品牌是核心资产——\"Coca-Cola\"是全球最有价值的品牌之一。段永平和巴菲特都认为：生意越简单越好，因为简单的生意很难被搞砸。"
        },
        culture: {
            score: 82,
            ceoIntegrity: 85,
            shareholderFriendly: 90,
            longTermThinking: 78,
            detail: "可口可乐是股东友好的典范——连续62年提高分红（\"红利之王\"）。管理层稳定但不算特别有远见。在健康饮品转型上动作偏慢。段永平会说：\"管理层中规中矩，但生意模式本身不需要天才来经营。\""
        },
        margin: {
            score: 78,
            currentPE: 23.5,
            historicalPE: "20-30",
            fairValue: 58,
            marginOfSafety: -8.3,
            detail: "PE 23.5x在历史中位，不算便宜。作为防御型消费股，段永平可能会说\"好公司但不是好价格\"。最佳买点在PE<22x时出现，通常在大盘下跌时才有机会。"
        },
        holding: {
            score: 95,
            yearsHeld: "终身持有标的",
            buybackYield: 0.8,
            divGrowthYears: 62,
            detail: "连续62年提高分红——这是人类商业史上最长的分红增长记录之一。巴菲特持有38年从未卖出。这种\"确定性\"正是段永平投资哲学的核心：\"你不需要做很多对的事，只要不做错的事。\""
        },
        aiInsight: "KO 是段永平\"看懂生意\"维度的满分标的——全世界最简单的商业模式。62年分红增长记录证明了\"做时间的朋友\"的威力。AI建议：这不是一个让你暴富的股票，但它是投资组合的\"压舱石\"。当前估值合理但不算便宜，最佳策略是定投——在市场恐慌时加仓。"
    },
    {
        ticker: "COST", name: "Costco", price: 892.50,
        totalScore: 82,
        verdict: "优秀模式，估值偏贵",
        narrative: "Costco是段永平喜欢的那种\"反直觉\"好生意：它故意不靠卖货赚钱（毛利率压到11%），而是靠会员费赚钱。7000万会员每年交$60-120，续费率高达93%——这是一种\"订阅制零售\"。Charlie Munger说Costco是他最想带进棺材的公司。问题是：PE 53倍，真的太贵了。",
        business: {
            score: 90,
            model: "会员制仓储零售",
            moat: "极致低价+93%会员续费率+独特购物体验",
            oneLiner: "收会员费，然后以最低价格卖东西",
            understandable: true,
            detail: "Costco的生意模式独特而简单：商品几乎不赚钱（毛利率11%），利润全部来自会员费。这意味着它和顾客的利益完全一致——帮顾客省的钱越多，会员越愿意续费。段永平会欣赏这种\"利他即利己\"的商业逻辑。"
        },
        culture: {
            score: 92,
            ceoIntegrity: 90,
            shareholderFriendly: 85,
            longTermThinking: 95,
            detail: "Costco的企业文化极其优秀：员工薪酬是零售业最高的（减少流失率），对供应商公平（建立长期关系），对顾客诚实（从不在质量上偷工减料）。创始人Jim Sinegal的理念：\"善待员工和顾客，利润会自然来。\"这和段永平的\"做正确的事\"完全吻合。"
        },
        margin: {
            score: 58,
            currentPE: 52.8,
            historicalPE: "30-55",
            fairValue: 650,
            marginOfSafety: -37.3,
            detail: "PE 52.8x处于历史高位——即使是段永平也会说\"太贵了\"。好公司不等于好投资——在PE>50时买入Costco，需要很多年的增长才能消化估值。段永平的原则：\"宁可错过，不可做错。\""
        },
        holding: {
            score: 85,
            yearsHeld: "长期关注标的",
            buybackYield: 0.8,
            divGrowthYears: 20,
            detail: "连续20年提高分红，偶尔发放特别分红。会员费提价的能力保证了长期收益增长。但当前估值意味着如果你现在买入，\"做时间的朋友\"需要更多耐心。"
        },
        aiInsight: "COST 商业模式和企业文化都是A+级别——Munger说\"这是他见过的最好的零售企业\"。但段永平投资的关键是\"好价格\"，PE 53x严重缺乏安全边际。AI建议：加入关注清单，等大盘回调或增速放缓导致估值回归PE 35-40x区间时再出手。这是一个\"永远想买但很难买到好价格\"的股票。"
    },
    {
        ticker: "META", name: "Meta Platforms", price: 585.20,
        totalScore: 76,
        verdict: "好生意但文化存疑",
        narrative: "Meta的广告业务是印钞机——30亿人每天刷Facebook/Instagram/WhatsApp，广告商愿意为精准投放付高价。AI推荐引擎让广告效果更好，形成飞轮效应。但段永平可能会皱眉：扎克伯格在元宇宙上烧了$500亿，这不像\"正确的事\"。好在他已经在收手了。",
        business: {
            score: 88,
            model: "社交媒体广告",
            moat: "30亿用户社交图谱+AI精准广告+网络效应",
            oneLiner: "用免费社交App吸引用户，然后卖广告",
            understandable: true,
            detail: "Meta的核心生意简单明了：提供免费的社交平台，用户花时间刷信息流，Meta在信息流里插入精准广告。30亿用户的社交图谱是不可复制的资产。AI推荐算法让广告更精准、更赚钱。段永平会认可这种\"垄断用户注意力\"的商业模式。"
        },
        culture: {
            score: 62,
            ceoIntegrity: 60,
            shareholderFriendly: 70,
            longTermThinking: 65,
            detail: "这是Meta最大的软肋。扎克伯格在元宇宙上的\"豪赌\"（累计亏损$500亿+）严重损害了股东利益。双层股权结构让他不需要对任何人负责。段永平会说：\"CEO不够诚信——说要做社交，结果把钱烧在VR头盔上。\"不过2024年以来已明显转向AI，情况在改善。"
        },
        margin: {
            score: 80,
            currentPE: 24.3,
            historicalPE: "15-35",
            fairValue: 550,
            marginOfSafety: -6.4,
            detail: "PE 24.3x在科技股中属于合理偏低。考虑到35%的利润率和AI广告引擎的增长潜力，估值不算贵。如果回调到PE 20x以下会更有吸引力。"
        },
        holding: {
            score: 72,
            yearsHeld: "中期配置",
            buybackYield: 2.5,
            divGrowthYears: 1,
            detail: "2024年开始分红，回购力度大。但Reality Labs持续烧钱是不确定因素。段永平可能不会把它作为核心持仓——因为CEO的\"可预测性\"不够。"
        },
        aiInsight: "META 在段永平框架下呈现矛盾：商业模式A级（简单、高利润、有护城河），但企业文化C级（CEO独断、元宇宙烧钱）。段永平的原则是\"跟对人\"——扎克伯格的不可预测性是最大减分项。AI建议：如果你能接受CEO风险，PE 24x的Meta是性价比不错的选择。但这不是\"买了忘记\"型的股票。"
    },
    {
        ticker: "NVDA", name: "NVIDIA Corp.", price: 875.50,
        totalScore: 70,
        verdict: "伟大公司，不符合安全边际",
        narrative: "NVDA是这个时代最伟大的科技公司之一——它定义了AI计算的基础设施。但段永平会说：\"这个生意我看不太懂。\" 芯片行业变化太快，今天的霸主不一定是5年后的霸主（想想Intel）。而且PE 55倍意味着市场已经把未来5年的增长都算进了价格。好公司≠好投资。",
        business: {
            score: 75,
            model: "AI芯片设计+CUDA生态",
            moat: "CUDA软件生态锁定开发者，GPU性能领先",
            oneLiner: "设计AI训练/推理芯片，卖给云计算公司",
            understandable: false,
            detail: "NVDA的生意不算简单——你需要理解GPU架构、AI训练vs推理、CUDA生态等技术概念。段永平的原则是\"看不懂就不投\"——芯片行业的技术迭代速度太快，今天的领先者可能被下一代架构颠覆。段永平投资过步步高和OPPO/vivo，他了解硬件行业的残酷竞争。"
        },
        culture: {
            score: 85,
            ceoIntegrity: 88,
            shareholderFriendly: 80,
            longTermThinking: 88,
            detail: "黄仁勋是一位优秀的CEO——远见、执行力、技术判断力都是顶级的。但他倾向于激进投资新领域（汽车、机器人、医疗），这增加了不确定性。股东回报在改善（开始分红、加大回购）。段永平会认可黄仁勋的能力，但担心行业变化太快。"
        },
        margin: {
            score: 48,
            currentPE: 55.3,
            historicalPE: "25-70",
            fairValue: 600,
            marginOfSafety: -45.9,
            detail: "PE 55.3x严重缺乏安全边际。即使考虑到强劲增长，当前价格已经透支了大量未来预期。段永平会说：\"这个价格买入，你需要一切都完美才能赚钱——而现实中很少有事情是完美的。\""
        },
        holding: {
            score: 62,
            yearsHeld: "不适合段永平式长期持有",
            buybackYield: 0.5,
            divGrowthYears: 3,
            detail: "分红刚起步，回购规模相对利润偏小。更重要的是：科技硬件公司的\"长期持有\"风险较高——段永平亲身经历过VCD/DVD行业的兴衰，深知硬件行业没有\"永远的护城河\"。"
        },
        aiInsight: "NVDA 在段永平框架下得分不高——不是因为公司不好，而是因为\"看不太懂+太贵\"。段永平的投资哲学强调确定性：简单的生意、诚信的管理层、合理的价格。NVDA在第1和第3条上都打了折扣。AI建议：如果你比段永平更懂AI芯片行业，可以考虑。否则\"不懂就不投\"是更安全的选择。"
    }
];

const AI_PICKS = [
    { ticker: "TSM", name: "台积电", score: 93, reason: "AI 算力军备竞赛核心供应商，NVDA/AAPL/AMD 三大客户同步增长", tags: ["tag-chain", "供应链"] },
    { ticker: "GOOGL", name: "Alphabet", score: 88, reason: "PE 处于历史低位，AI 搜索变革虽有风险但云业务增速强劲", tags: ["tag-value", "价值"] },
    { ticker: "INTC", name: "Intel", score: 76, reason: "情绪极度悲观但供应链回流法案直接受益，基本面拐点可能临近", tags: ["tag-policy", "政策"] },
    { ticker: "ENPH", name: "Enphase", score: 74, reason: "清洁能源法案最大受益者，被极度超卖后估值回归合理", tags: ["tag-policy", "政策"] },
    { ticker: "MSTR", name: "MicroStrategy", score: 68, reason: "空头拥挤度极高 + 社交媒体看涨情绪，存在轧空可能", tags: ["tag-squeeze", "轧空"] },
];
