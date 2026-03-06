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

const AI_PICKS = [
    { ticker: "TSM", name: "台积电", score: 93, reason: "AI 算力军备竞赛核心供应商，NVDA/AAPL/AMD 三大客户同步增长", tags: ["tag-chain", "供应链"] },
    { ticker: "GOOGL", name: "Alphabet", score: 88, reason: "PE 处于历史低位，AI 搜索变革虽有风险但云业务增速强劲", tags: ["tag-value", "价值"] },
    { ticker: "INTC", name: "Intel", score: 76, reason: "情绪极度悲观但供应链回流法案直接受益，基本面拐点可能临近", tags: ["tag-policy", "政策"] },
    { ticker: "ENPH", name: "Enphase", score: 74, reason: "清洁能源法案最大受益者，被极度超卖后估值回归合理", tags: ["tag-policy", "政策"] },
    { ticker: "MSTR", name: "MicroStrategy", score: 68, reason: "空头拥挤度极高 + 社交媒体看涨情绪，存在轧空可能", tags: ["tag-squeeze", "轧空"] },
];
