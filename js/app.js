// === AlphaScreen Main Application ===
(function() {
    'use strict';

    // === Navigation ===
    const navItems = document.querySelectorAll('.nav-item');
    const modules = document.querySelectorAll('.module');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.dataset.module;
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            modules.forEach(m => m.classList.remove('active'));
            document.getElementById('mod-' + target).classList.add('active');
        });
    });

    // === Market Status ===
    function updateMarketStatus() {
        const now = new Date();
        const nyHour = parseInt(now.toLocaleString('en-US', { timeZone: 'America/New_York', hour: 'numeric', hour12: false }));
        const day = now.toLocaleString('en-US', { timeZone: 'America/New_York', weekday: 'short' });
        const el = document.getElementById('marketStatus');
        const dot = document.querySelector('.status-dot');

        if (['Sat', 'Sun'].includes(day)) {
            el.textContent = '市场休市 (周末)';
            dot.style.background = '#6b7280';
        } else if (nyHour >= 9 && nyHour < 16) {
            el.textContent = '美股交易中';
            dot.style.background = '#10b981';
        } else if (nyHour >= 16 && nyHour < 20) {
            el.textContent = '盘后交易';
            dot.style.background = '#f59e0b';
        } else {
            el.textContent = '盘前等待中';
            dot.style.background = '#6b7280';
        }
    }
    updateMarketStatus();

    // === Dashboard ===
    function renderDashboard() {
        document.getElementById('bullishCount').textContent = '12';
        document.getElementById('bearishCount').textContent = '5';
        document.getElementById('squeezeCount').textContent = '3';
        document.getElementById('policyCount').textContent = '8';

        // AI Picks
        const picksHtml = AI_PICKS.map(p => `
            <div class="ai-pick">
                <div class="ai-pick-info">
                    <span class="ai-pick-ticker">${p.ticker} <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem">${p.name}</span></span>
                    <span class="ai-pick-reason">${p.reason}</span>
                    <div class="ai-pick-tags">
                        <span class="tag ${p.tags[0]}">${p.tags[1]}</span>
                    </div>
                </div>
                <div class="ai-pick-score">
                    <span class="ai-pick-score-val ${p.score >= 80 ? 'positive' : ''}">${p.score}</span>
                    <span class="ai-pick-score-label">AI评分</span>
                </div>
            </div>
        `).join('');
        document.getElementById('aiPicks').innerHTML = picksHtml;

        // Sentiment Gauge
        const gaugeVal = 32; // Fear level
        document.getElementById('sentimentGauge').innerHTML = `
            <div class="gauge-container">
                <div class="gauge-bg"></div>
                <div class="gauge-needle" style="transform: rotate(${-90 + gaugeVal * 1.8}deg)"></div>
            </div>
            <div class="gauge-value" style="color:var(--accent-orange)">${gaugeVal}</div>
            <div class="gauge-label">恐惧</div>
            <div class="gauge-desc">Put/Call Ratio: 1.28 — 市场处于极度恐惧区间，历史上往往是反弹前兆</div>
        `;

        // Signal Feed
        const feedHtml = SIGNAL_FEED.map(s => `
            <div class="signal-item">
                <div class="signal-icon si-${s.type}"><i class="fas ${s.icon}"></i></div>
                <div class="signal-content">
                    <div class="signal-title">${s.title}</div>
                    <div class="signal-desc">${s.desc}</div>
                </div>
                <div class="signal-time">${s.time}</div>
            </div>
        `).join('');
        document.getElementById('signalFeed').innerHTML = feedHtml;
    }
    renderDashboard();

    // === Multi-Factor Screener ===
    const presetBtns = document.querySelectorAll('.preset-btn');
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const strategy = btn.dataset.strategy;
            const preset = STRATEGY_PRESETS[strategy];
            if (preset) {
                document.getElementById('mcapMin').value = preset.mcapMin;
                document.getElementById('mcapMax').value = preset.mcapMax === 99999 ? '' : preset.mcapMax;
                document.getElementById('peMin').value = preset.peMin;
                document.getElementById('peMax').value = preset.peMax === 999 ? '' : preset.peMax;
                document.getElementById('pbMin').value = preset.pbMin;
                document.getElementById('pbMax').value = preset.pbMax === 999 ? '' : preset.pbMax;
                document.getElementById('roeMin').value = preset.roeMin;
                document.getElementById('roeMax').value = preset.roeMax === 999 ? '' : preset.roeMax;
                document.getElementById('revGrowthMin').value = preset.revGrowthMin;
                document.getElementById('revGrowthMax').value = preset.revGrowthMax === 999 ? '' : preset.revGrowthMax;
                document.getElementById('divYieldMin').value = preset.divYieldMin;
                document.getElementById('divYieldMax').value = preset.divYieldMax === 99 ? '' : preset.divYieldMax;
                document.getElementById('debtMin').value = preset.debtMin;
                document.getElementById('debtMax').value = preset.debtMax;
                document.getElementById('perf52Min').value = preset.perf52Min;
                document.getElementById('perf52Max').value = preset.perf52Max === 999 ? '' : preset.perf52Max;
            }
            runScreener();
        });
    });

    document.getElementById('toggleFilters').addEventListener('click', () => {
        document.getElementById('filtersGrid').classList.toggle('show');
    });

    function getFilterVal(id, def) {
        const v = document.getElementById(id).value;
        return v === '' ? def : parseFloat(v);
    }

    function runScreener() {
        const filters = {
            mcapMin: getFilterVal('mcapMin', 0),
            mcapMax: getFilterVal('mcapMax', 999999),
            peMin: getFilterVal('peMin', -999),
            peMax: getFilterVal('peMax', 999),
            pbMin: getFilterVal('pbMin', 0),
            pbMax: getFilterVal('pbMax', 999),
            roeMin: getFilterVal('roeMin', -999),
            roeMax: getFilterVal('roeMax', 999),
            revGrowthMin: getFilterVal('revGrowthMin', -999),
            revGrowthMax: getFilterVal('revGrowthMax', 999),
            divYieldMin: getFilterVal('divYieldMin', 0),
            divYieldMax: getFilterVal('divYieldMax', 99),
            debtMin: getFilterVal('debtMin', 0),
            debtMax: getFilterVal('debtMax', 100),
            perf52Min: getFilterVal('perf52Min', -999),
            perf52Max: getFilterVal('perf52Max', 999),
        };

        let results = STOCKS.filter(s => {
            return s.marketCap >= filters.mcapMin && s.marketCap <= filters.mcapMax
                && s.pe >= filters.peMin && s.pe <= filters.peMax
                && s.pb >= filters.pbMin && s.pb <= filters.pbMax
                && s.roe >= filters.roeMin && s.roe <= filters.roeMax
                && s.revGrowth >= filters.revGrowthMin && s.revGrowth <= filters.revGrowthMax
                && s.divYield >= filters.divYieldMin && s.divYield <= filters.divYieldMax
                && s.debtRatio >= filters.debtMin && s.debtRatio <= filters.debtMax
                && s.perf52w >= filters.perf52Min && s.perf52w <= filters.perf52Max;
        });

        const sortKey = document.getElementById('sortBy').value;
        results.sort((a, b) => {
            if (sortKey === 'score') return b.score - a.score;
            if (sortKey === 'pe') return a.pe - b.pe;
            if (sortKey === 'roe') return b.roe - a.roe;
            if (sortKey === 'marketCap') return b.marketCap - a.marketCap;
            if (sortKey === 'divYield') return b.divYield - a.divYield;
            return 0;
        });

        document.getElementById('resultCount').textContent = `(${results.length} 只)`;

        const tbody = document.querySelector('#screenerResults tbody');
        if (results.length === 0) {
            tbody.innerHTML = '<tr><td colspan="12" style="text-align:center;color:var(--text-muted);padding:40px">没有符合条件的股票，请调整筛选参数</td></tr>';
            return;
        }

        tbody.innerHTML = results.map((s, i) => {
            const scoreClass = s.score >= 80 ? 'score-high' : s.score >= 60 ? 'score-medium' : 'score-low';
            const perfClass = s.perf52w >= 0 ? 'positive' : 'negative';
            const growthClass = s.revGrowth >= 0 ? 'positive' : 'negative';
            return `
                <tr>
                    <td>${i + 1}</td>
                    <td><div class="ticker-cell"><div><span class="ticker-symbol">${s.ticker}</span><br><span class="ticker-name">${s.name}</span></div></div></td>
                    <td>${s.industry}</td>
                    <td>${s.marketCap.toLocaleString()}</td>
                    <td>${s.pe > 0 ? s.pe.toFixed(1) : 'N/A'}</td>
                    <td>${s.pb > 0 ? s.pb.toFixed(1) : 'N/A'}</td>
                    <td>${s.roe > 0 ? s.roe.toFixed(1) : 'N/A'}</td>
                    <td class="${growthClass}">${s.revGrowth > 0 ? '+' : ''}${s.revGrowth.toFixed(1)}</td>
                    <td>${s.divYield.toFixed(2)}</td>
                    <td>${s.debtRatio.toFixed(1)}</td>
                    <td class="${perfClass}">${s.perf52w > 0 ? '+' : ''}${s.perf52w.toFixed(1)}</td>
                    <td><span class="score-badge ${scoreClass}">${s.score}</span></td>
                </tr>
            `;
        }).join('');
    }

    document.getElementById('runScreener').addEventListener('click', runScreener);
    document.getElementById('sortBy').addEventListener('change', runScreener);

    // NLP search simulation
    document.getElementById('nlpSearch').addEventListener('click', () => {
        const query = document.getElementById('nlpQuery').value.trim();
        if (!query) return;

        // Simple NLP parsing simulation
        const lowerQ = query.toLowerCase();
        if (lowerQ.includes('分红') || lowerQ.includes('股息')) {
            document.querySelector('[data-strategy="dividend"]').click();
        } else if (lowerQ.includes('巴菲特') || lowerQ.includes('价值') || lowerQ.includes('低估')) {
            document.querySelector('[data-strategy="value"]').click();
        } else if (lowerQ.includes('成长') || lowerQ.includes('增长')) {
            document.querySelector('[data-strategy="growth"]').click();
        } else if (lowerQ.includes('动量') || lowerQ.includes('突破') || lowerQ.includes('涨')) {
            document.querySelector('[data-strategy="momentum"]').click();
        } else if (lowerQ.includes('反转') || lowerQ.includes('逆向') || lowerQ.includes('超跌')) {
            document.querySelector('[data-strategy="contrarian"]').click();
        } else {
            runScreener();
        }
    });

    document.getElementById('nlpQuery').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') document.getElementById('nlpSearch').click();
    });

    // Export
    document.getElementById('exportResults').addEventListener('click', () => {
        const rows = document.querySelectorAll('#screenerResults tr');
        let csv = [];
        rows.forEach(row => {
            const cells = row.querySelectorAll('th, td');
            const rowData = Array.from(cells).map(c => c.textContent.trim());
            csv.push(rowData.join(','));
        });
        const blob = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'alphascreen_results.csv';
        link.click();
    });

    // Init screener with default
    runScreener();

    // === Supply Chain ===
    function renderSupplyChain(ticker) {
        const data = SUPPLY_CHAIN[ticker];
        if (!data) return;

        // Render graph
        const graph = document.getElementById('chainGraph');
        const all = [...data.upstream, ...data.downstream];
        const upCount = data.upstream.length;
        const downCount = data.downstream.length;

        let nodesHtml = `<div class="chain-node core" style="left:50%;top:45%;transform:translate(-50%,-50%)">
            <div class="node-ticker">${ticker}</div>
            <div class="node-name">${data.name}</div>
            <div class="node-impact" style="color:var(--accent-blue)">核心公司</div>
        </div>`;

        data.upstream.forEach((s, i) => {
            const top = 10 + (i * (80 / Math.max(upCount - 1, 1)));
            nodesHtml += `<div class="chain-node upstream" style="left:8%;top:${top}%">
                <div class="node-ticker">${s.ticker}</div>
                <div class="node-name">${s.name}</div>
                <div class="node-impact positive">+${s.impact}%相关</div>
            </div>`;
        });

        data.downstream.forEach((s, i) => {
            const top = 15 + (i * (70 / Math.max(downCount - 1, 1)));
            nodesHtml += `<div class="chain-node downstream" style="right:8%;top:${top}%">
                <div class="node-ticker">${s.ticker}</div>
                <div class="node-name">${s.name}</div>
                <div class="node-impact" style="color:var(--accent-orange)">${s.correlation > 0 ? '+' : ''}${(s.correlation * 100).toFixed(0)}%联动</div>
            </div>`;
        });

        graph.innerHTML = nodesHtml;

        // Details
        const detailsHtml = all.map(s => {
            const type = data.upstream.includes(s) ? 'upstream' : 'downstream';
            return `
                <div class="chain-item">
                    <div class="chain-item-info">
                        <span class="chain-item-type ${type === 'upstream' ? 'type-upstream' : 'type-downstream'}">${type === 'upstream' ? '上游' : '下游'}</span>
                        <div>
                            <span class="chain-item-ticker">${s.ticker}</span>
                            <span class="chain-item-name"> ${s.name} — ${s.role}</span>
                        </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                        <div class="correlation-bar"><div class="correlation-fill" style="width:${Math.abs(s.correlation) * 100}%"></div></div>
                        <span style="font-size:0.8rem;font-weight:600">${(s.correlation * 100).toFixed(0)}%</span>
                    </div>
                </div>
            `;
        }).join('');
        document.getElementById('chainDetails').innerHTML = detailsHtml;

        // Recommendations
        const topUpstream = data.upstream.sort((a, b) => b.impact - a.impact).slice(0, 3);
        const recsHtml = topUpstream.map(s => `
            <div class="recommendation">
                <div class="rec-header">
                    <span class="rec-action rec-buy">关注买入</span>
                    <span class="rec-ticker">${s.ticker} (${s.name})</span>
                </div>
                <div class="rec-reason">作为 ${data.name} 的核心${s.role}供应商，联动相关度 ${s.impact}%。当 ${ticker} 财报超预期时，${s.ticker} 通常在 1-3 个交易日内跟涨。历史联动系数: ${s.correlation.toFixed(2)}</div>
            </div>
        `).join('');
        document.getElementById('chainRecommendations').innerHTML = recsHtml;
    }

    document.getElementById('runChainAnalysis').addEventListener('click', () => {
        renderSupplyChain(document.getElementById('chainCompany').value);
    });
    renderSupplyChain('NVDA');

    // === Policy ===
    function renderPolicy() {
        // Bills
        const billsHtml = POLICY_BILLS.map(b => `
            <div class="bill-card" data-bill="${b.id}">
                <div class="bill-name">${b.name}</div>
                <div class="bill-desc">${b.desc}</div>
                <div class="bill-meta">
                    <span class="bill-status ${b.status === 'active' ? 'status-active' : 'status-pending'}">${b.status === 'active' ? '已通过委员会' : '审议中'}</span>
                    <span style="color:var(--text-muted)">${b.date}</span>
                    <span style="color:var(--text-muted)">${b.stocks.length} 只受益股</span>
                </div>
            </div>
        `).join('');
        document.getElementById('billsList').innerHTML = billsHtml;

        // Show first bill's stocks by default
        renderPolicyStocks(POLICY_BILLS[0]);

        document.querySelectorAll('.bill-card').forEach(card => {
            card.addEventListener('click', () => {
                const bill = POLICY_BILLS.find(b => b.id === card.dataset.bill);
                if (bill) renderPolicyStocks(bill);
                document.querySelectorAll('.bill-card').forEach(c => c.style.background = '');
                card.style.background = 'var(--bg-card-hover)';
            });
        });

        // Congress trades
        const tradesHtml = `
            <div style="margin-bottom:12px">
                <div class="congress-trade" style="font-weight:600;color:var(--text-muted);font-size:0.75rem">
                    <div>议员</div><div>股票</div><div>操作</div><div>金额</div><div>时机</div>
                </div>
            </div>
        ` + CONGRESS_TRADES.map(t => `
            <div class="congress-trade">
                <div>
                    <span class="congress-name">${t.name}</span><br>
                    <span class="congress-party party-${t.party.toLowerCase()}">${t.party === 'D' ? '民主党' : '共和党'}</span>
                </div>
                <div style="font-weight:600">${t.ticker}</div>
                <div><span class="trade-type ${t.action === '买入' ? 'trade-buy' : 'trade-sell'}">${t.action}</span></div>
                <div>${t.amount}</div>
                <div style="font-size:0.75rem;color:var(--accent-orange)">${t.timing}</div>
            </div>
        `).join('');
        document.getElementById('congressTrades').innerHTML = tradesHtml;
    }

    function renderPolicyStocks(bill) {
        const html = bill.stocks.map(s => {
            const color = s.score >= 85 ? 'var(--accent-green)' : s.score >= 70 ? 'var(--accent-blue)' : 'var(--accent-orange)';
            return `
                <div class="policy-stock-item">
                    <div>
                        <div style="font-weight:600">${s.ticker} <span style="color:var(--text-muted);font-weight:400;font-size:0.85rem">${s.name}</span></div>
                        <div style="font-size:0.78rem;color:var(--text-muted);margin-top:4px">${s.reason}</div>
                    </div>
                    <div class="policy-score">
                        <div class="score-bar"><div class="score-fill" style="width:${s.score}%;background:${color}"></div></div>
                        <span style="font-weight:700;min-width:30px">${s.score}</span>
                    </div>
                </div>
            `;
        }).join('');
        document.getElementById('policyStocks').innerHTML = html;
    }

    // Policy tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
        });
    });

    renderPolicy();

    // === Sentiment & Short Squeeze ===
    function renderSentiment() {
        // Squeeze list
        const squeezeHtml = SQUEEZE_DATA.map(s => `
            <div class="squeeze-item">
                <div class="squeeze-info">
                    <span class="squeeze-ticker">${s.ticker}</span>
                    <span class="squeeze-name">${s.name}</span>
                </div>
                <div class="squeeze-metrics">
                    <div class="squeeze-metric">
                        <span class="squeeze-metric-label">空头占比</span>
                        <span class="squeeze-metric-value negative">${s.shortInterest}%</span>
                    </div>
                    <div class="squeeze-metric">
                        <span class="squeeze-metric-label">回补天数</span>
                        <span class="squeeze-metric-value">${s.daysTocover}</span>
                    </div>
                    <div class="squeeze-metric">
                        <span class="squeeze-metric-label">社交热度</span>
                        <span class="squeeze-metric-value">${s.socialScore}</span>
                    </div>
                    <span class="alert-badge alert-${s.alert}">${s.alert === 'high' ? '高危' : s.alert === 'medium' ? '关注' : '一般'}</span>
                </div>
            </div>
        `).join('');
        document.getElementById('squeezeList').innerHTML = squeezeHtml;

        // Divergence
        const divHtml = DIVERGENCE_DATA.map(d => `
            <div class="divergence-item">
                <div class="div-header">
                    <span class="div-ticker">${d.ticker} <span style="color:var(--text-muted);font-weight:400;font-size:0.85rem">${d.name}</span></span>
                    <span class="alert-badge ${d.type === 'bullish' ? 'alert-low' : 'alert-high'}">${d.type === 'bullish' ? '看多机会' : '风险警示'}</span>
                </div>
                <div style="margin-bottom:8px">
                    <div class="div-bars" style="margin-bottom:4px">
                        <span class="div-bar-label">情绪</span>
                        <div class="div-bar-track"><div class="div-bar-fill-${d.sentimentScore > 50 ? 'positive' : 'negative'}" style="width:${d.sentimentScore}%"></div></div>
                        <span style="font-size:0.8rem;font-weight:600;min-width:30px">${d.sentimentScore}</span>
                    </div>
                    <div class="div-bars">
                        <span class="div-bar-label">基本面</span>
                        <div class="div-bar-track"><div class="div-bar-fill-positive" style="width:${d.fundamentalScore}%"></div></div>
                        <span style="font-size:0.8rem;font-weight:600;min-width:30px">${d.fundamentalScore}</span>
                    </div>
                </div>
                <div style="font-size:0.78rem;color:var(--text-muted)">${d.direction}</div>
            </div>
        `).join('');
        document.getElementById('divergenceList').innerHTML = divHtml;

        // Social Heat
        renderSocialHeat('all');

        document.querySelectorAll('.source-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.source-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderSocialHeat(btn.dataset.source);
            });
        });
    }

    function renderSocialHeat(source) {
        const filtered = source === 'all' ? SOCIAL_HEAT : SOCIAL_HEAT.filter(s => s.source.toLowerCase().includes(source));
        const html = `
            <div class="social-item" style="font-weight:600;color:var(--text-muted);font-size:0.75rem">
                <div>股票</div><div>热度条</div><div>提及次数</div><div>情绪</div><div>质量分</div>
            </div>
        ` + filtered.map(s => {
            const sentColor = s.sentiment >= 70 ? 'positive' : s.sentiment <= 40 ? 'negative' : '';
            return `
                <div class="social-item">
                    <div style="font-weight:700">${s.ticker}</div>
                    <div><div class="heat-bar"><div class="heat-fill heat-${s.heat}" style="width:${Math.min(s.mentions / 160, 100)}%"></div></div></div>
                    <div>${s.mentions.toLocaleString()} <span style="font-size:0.7rem" class="${s.change >= 0 ? 'positive' : 'negative'}">${s.change > 0 ? '+' : ''}${s.change}%</span></div>
                    <div class="${sentColor}">${s.sentiment}</div>
                    <div>${s.quality}</div>
                </div>
            `;
        }).join('');
        document.getElementById('socialHeat').innerHTML = html;
    }

    renderSentiment();

    // === Hedge Fund 13F ===
    function renderHedgeFund() {
        // New positions
        const posHtml = HF_POSITIONS.newPositions.map(p => `
            <div class="hf-position">
                <div class="hf-pos-info">
                    <span class="hf-pos-ticker">${p.ticker} <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem">${p.name}</span></span>
                    <span class="hf-pos-fund">${p.fund} · ${p.date}</span>
                </div>
                <div style="text-align:right">
                    <span class="hf-pos-change positive">${p.change}</span>
                    <div style="font-size:0.75rem;color:var(--text-muted)">${p.value}</div>
                </div>
            </div>
        `).join('');
        document.getElementById('hfNewPositions').innerHTML = posHtml;

        // Consensus
        const consHtml = HF_POSITIONS.consensus.map(c => `
            <div class="hf-consensus-item">
                <div>
                    <div style="font-weight:600">${c.ticker} <span style="color:var(--text-muted);font-weight:400;font-size:0.85rem">${c.name}</span></div>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px">${c.topFunds.join(' · ')}</div>
                </div>
                <div style="text-align:right">
                    <span class="fund-count">${c.funds} 家基金</span>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px">${c.totalValue}</div>
                </div>
            </div>
        `).join('');
        document.getElementById('hfConsensus').innerHTML = consHtml;

        // Shadow
        const shadowHtml = `
            <div class="shadow-item" style="font-weight:600;color:var(--text-muted);font-size:0.75rem">
                <div>精品基金</div><div>标的</div><div>操作</div><div>规模</div><div>年化回报</div>
            </div>
        ` + HF_POSITIONS.shadow.map(s => `
            <div class="shadow-item">
                <div>
                    <div class="shadow-fund">${s.fund}</div>
                    <div class="shadow-fund-detail">${s.detail}</div>
                </div>
                <div style="font-weight:600">${s.ticker}</div>
                <div><span class="trade-type trade-buy">${s.action}</span></div>
                <div>${s.value}</div>
                <div class="positive">${s.return1y}</div>
            </div>
        `).join('');
        document.getElementById('hfShadow').innerHTML = shadowHtml;
    }

    document.getElementById('runHfAnalysis').addEventListener('click', renderHedgeFund);
    renderHedgeFund();

    // === Narrative Auditor ===
    function renderNarrative(ticker) {
        const data = NARRATIVE_DATA[ticker];
        if (!data) {
            document.getElementById('promiseTracker').innerHTML = '<div class="loading">暂无该公司的叙事分析数据</div>';
            document.getElementById('deflectionScore').innerHTML = '';
            document.getElementById('alignmentAnalysis').innerHTML = '';
            return;
        }

        // Promise tracker
        const promiseHtml = data.promises.map(p => {
            let icon, color;
            switch (p.result) {
                case 'fulfilled': icon = '&#10003;'; color = 'var(--accent-green)'; break;
                case 'missed': icon = '&#10007;'; color = 'var(--accent-red)'; break;
                case 'partial': icon = '&#9679;'; color = 'var(--accent-orange)'; break;
                default: icon = '&#8987;'; color = 'var(--accent-blue)'; break;
            }
            const labels = { fulfilled: '已兑现', missed: '未兑现', partial: '部分兑现', pending: '待验证', tracking: '追踪中' };
            return `
                <div class="promise-item">
                    <div class="promise-quarter">${p.quarter}</div>
                    <div class="promise-text"><strong>承诺：</strong>${p.promise}</div>
                    <div class="promise-result">
                        <span class="result-icon" style="color:${color}">${icon}</span>
                        <span style="color:${color};font-weight:600">${labels[p.result]}</span>
                        <span style="color:var(--text-muted);font-size:0.78rem">— ${p.actual}</span>
                    </div>
                </div>
            `;
        }).join('');
        document.getElementById('promiseTracker').innerHTML = promiseHtml;

        // Deflection score
        const dColor = data.deflectionScore <= 30 ? 'var(--accent-green)' : data.deflectionScore <= 50 ? 'var(--accent-orange)' : 'var(--accent-red)';
        const dBorder = data.deflectionScore <= 30 ? 'rgba(16,185,129,0.3)' : data.deflectionScore <= 50 ? 'rgba(245,158,11,0.3)' : 'rgba(239,68,68,0.3)';
        document.getElementById('deflectionScore').innerHTML = `
            <div class="deflection-meter">
                <div class="deflection-circle" style="border-color:${dBorder}">
                    <span class="deflection-value" style="color:${dColor}">${data.deflectionScore}</span>
                    <span class="deflection-label">${data.deflectionLevel === 'low' ? '低回避' : data.deflectionLevel === 'medium' ? '中等回避' : '高度回避'}</span>
                </div>
                <div class="deflection-desc">${data.deflectionDesc}</div>
            </div>
        `;

        // Alignment analysis
        const alignHtml = data.alignment.map(a => {
            const gapColor = a.gap <= 30 ? 'var(--accent-green)' : a.gap <= 50 ? 'var(--accent-orange)' : 'var(--accent-red)';
            return `
                <div class="alignment-item">
                    <div class="alignment-topic">
                        <span>${a.topic}</span>
                        <span style="font-size:0.75rem;color:${gapColor};font-weight:400">语义偏移: ${a.gap}%</span>
                    </div>
                    <div class="alignment-comparison">
                        <div class="alignment-side">
                            <span class="alignment-side-label">管理层陈述</span>
                            "${a.mgmt}"
                        </div>
                        <div class="alignment-side">
                            <span class="alignment-side-label">分析师追问</span>
                            "${a.analyst}"
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        document.getElementById('alignmentAnalysis').innerHTML = alignHtml;
    }

    document.getElementById('runNarrative').addEventListener('click', () => {
        renderNarrative(document.getElementById('narrativeCompany').value);
    });
    renderNarrative('NVDA');

    // === CAN SLIM ===
    function renderCanslim() {
        // Market status bar
        const m = CANSLIM_MARKET;
        document.getElementById('canslimMarket').innerHTML = `
            <div class="canslim-market-inner">
                <div class="cs-market-item">
                    <span class="cs-market-label">M因子 · 大盘方向</span>
                    <span class="cs-market-status" style="background:rgba(245,158,11,0.2);color:var(--accent-orange)">${m.status}</span>
                </div>
                <div class="cs-market-item">
                    <span class="cs-market-label">S&P 500</span>
                    <span class="cs-market-value">${m.sp500Above50ma ? '> 50MA' : '< 50MA'}</span>
                </div>
                <div class="cs-market-item">
                    <span class="cs-market-label">分发日</span>
                    <span class="cs-market-value" style="color:${m.distributionDays >= 4 ? 'var(--accent-red)' : 'var(--accent-green)'}">${m.distributionDays} 天</span>
                </div>
                <div class="cs-market-item">
                    <span class="cs-market-label">VIX</span>
                    <span class="cs-market-value">${m.vix}</span>
                </div>
                <div class="cs-market-item">
                    <span class="cs-market-label">Put/Call</span>
                    <span class="cs-market-value" style="color:${m.putCallRatio > 1 ? 'var(--accent-red)' : 'var(--accent-green)'}">${m.putCallRatio}</span>
                </div>
                <div class="cs-market-item" style="flex:2">
                    <span class="cs-market-label">AI 解读</span>
                    <span style="font-size:0.8rem;color:var(--text-secondary)">${m.desc}</span>
                </div>
            </div>
        `;

        // Ranking table
        const letters = ['C', 'A', 'N', 'S', 'L', 'I', 'M'];
        const sorted = [...CANSLIM_STOCKS].sort((a, b) => b.total - a.total);

        const rankHtml = sorted.map((s, i) => {
            const bars = letters.map(l => {
                const score = s[l].score;
                const cls = score >= 80 ? 'cs-bar-high' : score >= 60 ? 'cs-bar-med' : 'cs-bar-low';
                return `<div class="cs-bar-group"><span class="cs-bar-letter">${l}</span><div class="cs-bar ${cls}">${score}</div></div>`;
            }).join('');

            const totalColor = s.total >= 80 ? 'var(--accent-green)' : s.total >= 65 ? 'var(--accent-orange)' : 'var(--accent-red)';

            return `
                <div class="cs-rank-item" data-ticker="${s.ticker}">
                    <div class="cs-rank-num">#${i + 1}</div>
                    <div>
                        <div class="cs-rank-ticker">${s.ticker}</div>
                        <div class="cs-rank-name">${s.name}</div>
                    </div>
                    <div class="cs-rank-bars">${bars}</div>
                    <div class="cs-rank-total">
                        <span class="cs-total-score" style="color:${totalColor}">${s.total}</span>
                        <span class="cs-total-label">综合</span>
                    </div>
                </div>
            `;
        }).join('');

        document.getElementById('canslimRanking').innerHTML = rankHtml;

        // Click to show detail
        document.querySelectorAll('.cs-rank-item').forEach(item => {
            item.addEventListener('click', () => {
                const ticker = item.dataset.ticker;
                renderCanslimDetail(ticker);
            });
        });
    }

    function renderCanslimDetail(ticker) {
        const s = CANSLIM_STOCKS.find(x => x.ticker === ticker);
        if (!s) return;

        document.getElementById('canslimDetailSection').style.display = 'block';
        document.getElementById('canslimDetailTitle').textContent = `${s.ticker} — ${s.name} · CAN SLIM 详细分析`;

        const letters = ['C', 'A', 'N', 'S', 'L', 'I', 'M'];
        const names = {
            C: 'Current Earnings', A: 'Annual Earnings', N: 'New Products/Highs',
            S: 'Supply & Demand', L: 'Leader/Laggard', I: 'Institutional', M: 'Market Direction'
        };

        const cardsHtml = letters.map(l => {
            const d = s[l];
            const color = d.score >= 80 ? 'var(--accent-green)' : d.score >= 60 ? 'var(--accent-orange)' : 'var(--accent-red)';
            return `
                <div class="cs-detail-card">
                    <div class="cs-detail-letter">${l}</div>
                    <div class="cs-detail-label">${names[l]}</div>
                    <div class="cs-detail-score" style="color:${color}">${d.score}</div>
                    <div class="cs-detail-reason">${d.detail}</div>
                </div>
            `;
        }).join('');

        const totalColor = s.total >= 80 ? 'var(--accent-green)' : s.total >= 65 ? 'var(--accent-orange)' : 'var(--accent-red)';

        // N-factor authenticity
        const nAuth = s.N.authenticity || 0;
        const nAuthColor = nAuth >= 80 ? 'var(--accent-green)' : nAuth >= 60 ? 'var(--accent-orange)' : 'var(--accent-red)';
        const nAuthHtml = s.N.authenticity ? `
            <div style="background:var(--bg-secondary);border-radius:var(--radius-sm);padding:16px;margin-bottom:16px">
                <h4 style="font-size:0.9rem;margin-bottom:8px;color:var(--accent-cyan)"><i class="fas fa-shield-alt"></i> N因子真实性验证 (AI独家)</h4>
                <div class="n-auth-bar">
                    <span class="n-auth-label">真实性</span>
                    <div class="n-auth-track"><div class="n-auth-fill" style="width:${nAuth}%;background:${nAuthColor}"></div></div>
                    <span style="font-weight:700;color:${nAuthColor}">${nAuth}%</span>
                </div>
                <p style="font-size:0.82rem;color:var(--text-secondary);margin-top:8px;line-height:1.5">${s.N.authDetail || ''}</p>
            </div>
        ` : '';

        // Narrative
        const narrativeHtml = s.narrative ? `
            <div class="cs-narrative">
                <h4><i class="fas fa-comment-dots"></i> 白话版解读 — 一句话告诉你为什么值得关注</h4>
                <p>${s.narrative}</p>
                ${s.historicalAnalogy ? `<p class="analogy"><i class="fas fa-history"></i> 历史类比：${s.historicalAnalogy}</p>` : ''}
            </div>
        ` : '';

        document.getElementById('canslimDetail').innerHTML = `
            <div style="text-align:center;margin-bottom:20px">
                <span style="font-size:3rem;font-weight:800;color:${totalColor}">${s.total}</span>
                <span style="display:block;font-size:0.85rem;color:var(--text-muted)">CAN SLIM 综合评分</span>
            </div>
            ${narrativeHtml}
            <div class="cs-detail-grid">${cardsHtml}</div>
            ${nAuthHtml}
            <div class="cs-ai-insight">
                <h4><i class="fas fa-robot"></i> AI 增强分析</h4>
                <p>${s.aiInsight}</p>
            </div>
        `;

        document.getElementById('canslimDetailSection').scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementById('closeCanslimDetail').addEventListener('click', () => {
        document.getElementById('canslimDetailSection').style.display = 'none';
    });

    renderCanslim();

    // === Weinstein Stage Analysis ===
    function renderWeinstein() {
        const header = `
            <div class="ws-item" style="font-weight:600;color:var(--text-muted);font-size:0.72rem">
                <div>阶段</div><div>股票</div><div>30周MA</div><div>分析</div><div>量能</div><div>操作建议</div>
            </div>
        `;

        // Sort: Stage 2 first, then 1, then others
        const sortOrder = { 2: 0, 1: 1, 3: 2, 4: 3 };
        const sorted = [...WEINSTEIN_STOCKS].sort((a, b) => (sortOrder[a.stage] || 9) - (sortOrder[b.stage] || 9));

        const html = sorted.map(s => {
            const stageBg = s.stage === 2 ? 'rgba(16,185,129,0.15)' : s.stage === 1 ? 'rgba(59,130,246,0.15)' : s.stage === 4 ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.15)';
            return `
                <div class="ws-item">
                    <div><span class="ws-stage-badge" style="background:${stageBg};color:${s.stageColor}">S${s.stage}</span></div>
                    <div>
                        <div style="font-weight:700">${s.ticker}</div>
                        <div style="font-size:0.72rem;color:var(--text-muted)">${s.stageLabel}</div>
                    </div>
                    <div style="font-size:0.82rem">${s.weekMA30}</div>
                    <div class="ws-detail-text">${s.detail}${s.vcpPattern ? '<span class="ws-vcp-tag">VCP形态</span>' : ''}</div>
                    <div style="font-size:0.82rem">${s.volumeTrend}</div>
                    <div><span class="ws-action-badge" style="color:${s.actionColor};background:${s.actionColor}22">${s.action}</span></div>
                </div>
            `;
        }).join('');

        document.getElementById('weinsteinResults').innerHTML = header + html;
    }
    renderWeinstein();

    // === Minervini VCP ===
    function renderMinervini() {
        const sorted = [...MINERVINI_VCP].sort((a, b) => b.score - a.score);

        const html = sorted.map(v => {
            const maxWidth = Math.max(...v.vcpContractions.map(c => parseFloat(c.width)));
            const contractionsHtml = v.vcpContractions.map((c, i) => {
                const height = (parseFloat(c.width) / maxWidth) * 100;
                return `<div class="vcp-bar-wrapper">
                    <div class="vcp-contraction-bar" style="height:${height}%"></div>
                    <span class="vcp-contraction-label">${c.width}<br>${c.duration}</span>
                </div>`;
            }).join('');

            const statusClass = `vcp-status-${v.status}`;

            const checks = [
                { label: '>50MA', pass: v.above50ma },
                { label: '>150MA', pass: v.above150ma },
                { label: '>200MA', pass: v.above200ma },
                { label: '50>200', pass: v.ma50AboveMa200 },
                { label: '200MA升', pass: v.ma200Rising },
                { label: `RS ${v.rs}`, pass: v.rs >= 70 },
            ];

            const checksHtml = checks.map(c =>
                `<span class="vcp-check ${c.pass ? 'vcp-check-pass' : 'vcp-check-fail'}">${c.pass ? '&#10003;' : '&#10007;'} ${c.label}</span>`
            ).join('');

            return `
                <div class="vcp-card">
                    <div class="vcp-header">
                        <div class="vcp-ticker-info">
                            <span class="vcp-ticker">${v.ticker}</span>
                            <span class="vcp-name">${v.name}</span>
                            <span class="vcp-price">$${v.price}</span>
                        </div>
                        <div style="display:flex;align-items:center;gap:12px">
                            <span class="score-badge ${v.score >= 85 ? 'score-high' : v.score >= 70 ? 'score-medium' : 'score-low'}">${v.score}</span>
                            <span class="vcp-status ${statusClass}">${v.statusLabel}</span>
                        </div>
                    </div>
                    <div class="vcp-body">
                        <div>
                            <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:6px">波动率收缩 (VCP)</div>
                            <div class="vcp-contractions">${contractionsHtml}</div>
                        </div>
                        <div class="vcp-metrics">
                            <div class="vcp-metric">
                                <span class="vcp-metric-label">枢轴点</span>
                                <span class="vcp-metric-value">$${v.pivotPoint}</span>
                            </div>
                            <div class="vcp-metric">
                                <span class="vcp-metric-label">距52周高</span>
                                <span class="vcp-metric-value" style="color:${v.currentVsHigh > -10 ? 'var(--accent-green)' : 'var(--accent-orange)'}">${v.currentVsHigh}%</span>
                            </div>
                            <div class="vcp-metric">
                                <span class="vcp-metric-label">距52周低</span>
                                <span class="vcp-metric-value positive">+${v.currentVsLow}%</span>
                            </div>
                            <div class="vcp-metric">
                                <span class="vcp-metric-label">RS评分</span>
                                <span class="vcp-metric-value">${v.rs}</span>
                            </div>
                        </div>
                    </div>
                    <div class="vcp-template-check">${checksHtml}</div>
                    <div class="vcp-detail-text">${v.detail}</div>
                    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:6px">买入确认量能：${v.pivotVolume}</div>
                </div>
            `;
        }).join('');

        document.getElementById('minerviniResults').innerHTML = html;
    }
    renderMinervini();

    // === Duan Yongping Framework ===
    function renderDuanYongping() {
        const sorted = [...DYP_STOCKS].sort((a, b) => b.totalScore - a.totalScore);
        const html = sorted.map((s, i) => {
            const scoreColor = v => v >= 85 ? 'var(--accent-green)' : v >= 70 ? 'var(--accent-orange)' : 'var(--accent-red)';
            return `
                <div class="dyp-stock-card" onclick="showDypDetail('${s.ticker}')">
                    <div class="dyp-stock-header">
                        <div class="dyp-stock-name">#${i+1} ${s.ticker} — ${s.name} <small>$${s.price}</small></div>
                        <div style="display:flex;align-items:center;gap:12px">
                            <span class="score-badge ${s.totalScore >= 85 ? 'score-high' : s.totalScore >= 70 ? 'score-medium' : 'score-low'}">${s.totalScore}</span>
                            <span class="dyp-verdict">${s.verdict}</span>
                        </div>
                    </div>
                    <div class="dyp-scores-bar">
                        <div class="dyp-score-item"><span class="dyp-score-label">看懂生意</span><span class="dyp-score-val" style="color:${scoreColor(s.business.score)}">${s.business.score}</span></div>
                        <div class="dyp-score-item"><span class="dyp-score-label">企业文化</span><span class="dyp-score-val" style="color:${scoreColor(s.culture.score)}">${s.culture.score}</span></div>
                        <div class="dyp-score-item"><span class="dyp-score-label">安全边际</span><span class="dyp-score-val" style="color:${scoreColor(s.margin.score)}">${s.margin.score}</span></div>
                        <div class="dyp-score-item"><span class="dyp-score-label">长期持有</span><span class="dyp-score-val" style="color:${scoreColor(s.holding.score)}">${s.holding.score}</span></div>
                    </div>
                    <div class="dyp-narrative-preview">${s.narrative}</div>
                </div>
            `;
        }).join('');
        document.getElementById('dypRanking').innerHTML = html;
    }

    window.showDypDetail = function(ticker) {
        const s = DYP_STOCKS.find(x => x.ticker === ticker);
        if (!s) return;
        document.getElementById('dypDetailTitle').textContent = `${s.ticker} — ${s.name} 段永平框架详细分析`;
        const marginColor = s.margin.marginOfSafety >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
        const marginPct = Math.min(Math.max((s.margin.score / 100) * 100, 5), 100);

        document.getElementById('dypDetail').innerHTML = `
            <div class="dyp-detail-block">
                <h4><i class="fas fa-eye"></i> 看懂生意 — ${s.business.score}分</h4>
                <div class="dyp-detail-meta">
                    <div class="dyp-meta-item"><span class="label">商业模式</span><span class="value">${s.business.model}</span></div>
                    <div class="dyp-meta-item"><span class="label">一句话说清</span><span class="value" style="font-size:0.8rem">${s.business.oneLiner}</span></div>
                    <div class="dyp-meta-item"><span class="label">段永平能看懂</span><span class="value">${s.business.understandable ? '✓ 是' : '✗ 偏难'}</span></div>
                </div>
                <div class="dyp-detail-text"><strong>护城河：</strong>${s.business.moat}<br><br>${s.business.detail}</div>
            </div>
            <div class="dyp-detail-block">
                <h4><i class="fas fa-heart"></i> 企业文化 — ${s.culture.score}分</h4>
                <div class="dyp-detail-meta">
                    <div class="dyp-meta-item"><span class="label">CEO诚信度</span><span class="value">${s.culture.ceoIntegrity}</span></div>
                    <div class="dyp-meta-item"><span class="label">股东友好度</span><span class="value">${s.culture.shareholderFriendly}</span></div>
                    <div class="dyp-meta-item"><span class="label">长期思维</span><span class="value">${s.culture.longTermThinking}</span></div>
                </div>
                <div class="dyp-detail-text">${s.culture.detail}</div>
            </div>
            <div class="dyp-detail-block">
                <h4><i class="fas fa-shield-alt"></i> 安全边际 — ${s.margin.score}分</h4>
                <div class="dyp-detail-meta">
                    <div class="dyp-meta-item"><span class="label">当前PE</span><span class="value">${s.margin.currentPE}x</span></div>
                    <div class="dyp-meta-item"><span class="label">历史PE区间</span><span class="value">${s.margin.historicalPE}</span></div>
                    <div class="dyp-meta-item"><span class="label">合理估值</span><span class="value">$${s.margin.fairValue}</span></div>
                    <div class="dyp-meta-item"><span class="label">安全边际</span><span class="value" style="color:${marginColor}">${s.margin.marginOfSafety > 0 ? '+' : ''}${s.margin.marginOfSafety}%</span></div>
                </div>
                <div class="dyp-margin-bar"><div class="dyp-margin-fill" style="width:${marginPct}%;background:${marginColor}"></div></div>
                <div class="dyp-detail-text">${s.margin.detail}</div>
            </div>
            <div class="dyp-detail-block">
                <h4><i class="fas fa-hourglass-half"></i> 长期持有 — ${s.holding.score}分</h4>
                <div class="dyp-detail-meta">
                    <div class="dyp-meta-item"><span class="label">持有性质</span><span class="value" style="font-size:0.8rem">${s.holding.yearsHeld}</span></div>
                    <div class="dyp-meta-item"><span class="label">回购收益率</span><span class="value">${s.holding.buybackYield}%</span></div>
                    <div class="dyp-meta-item"><span class="label">连续分红增长</span><span class="value">${s.holding.divGrowthYears}年</span></div>
                </div>
                <div class="dyp-detail-text">${s.holding.detail}</div>
            </div>
            <div class="cs-ai-insight">
                <h4><i class="fas fa-robot"></i> AI 综合建议</h4>
                <p>${s.aiInsight}</p>
            </div>
        `;

        document.getElementById('dypDetailSection').style.display = 'block';
        document.getElementById('dypDetailSection').scrollIntoView({ behavior: 'smooth' });
    };

    document.getElementById('closeDypDetail')?.addEventListener('click', () => {
        document.getElementById('dypDetailSection').style.display = 'none';
    });

    renderDuanYongping();

})();
