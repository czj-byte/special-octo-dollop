/////

//作者注：

//大部分都为AI生成代码（尤其是JavaScrict的），深感歉意。。。

/////

///1 随机一言

// 名言库
const quotes = [
    { text: "生活就像骑自行车，为了保持平衡，你必须不断前进。", author: "阿尔伯特·爱因斯坦" },
    { text: "成功不是终点，失败也并非末日，最重要的是继续前进的勇气。", author: "温斯顿·丘吉尔" },
    { text: "人生中最大的荣耀不在于从不跌倒，而在于每次跌倒后都能爬起来。", author: "纳尔逊·曼德拉" },
    { text: "不要等待机会，而要创造机会。", author: "乔治·伯纳德·肖" },
    { text: "你的时间有限，所以不要浪费时间活在别人的生活里。", author: "史蒂夫·乔布斯" },
    { text: "生命中最美好的事情都是免费的。", author: "佚名" },
    { text: "教育的根是苦的，但果实是甜的。", author: "亚里士多德" },
    { text: "千里之行，始于足下。", author: "老子" },
    { text: "天行健，君子以自强不息。", author: "《周易》" },
    { text: "三人行，必有我师焉。择其善者而从之，其不善者而改之。", author: "孔子" },
    { text: "知识就是力量。", author: "弗朗西斯·培根" },
    { text: "活着就是为了改变世界，难道还有其他原因吗？", author: "史蒂夫·乔布斯" },
    { text: "昨天已成历史，明天还是未知，今天是上天的礼物。", author: "比尔·基恩" },
    { text: "你无法改变风向，但可以调整船帆。", author: "吉米·迪恩" },
    { text: "生活不是等待暴风雨过去，而是学会在雨中跳舞。", author: "薇薇安·格林" },
    { text: "梦想不会逃跑，逃跑的永远是自己。", author: "宫崎骏" },
    { text: "真正的发现之旅不在于寻找新风景，而在于拥有新眼光。", author: "马塞尔·普鲁斯特" },
    { text: "最困难的事情就是认识自己。", author: "泰勒斯" },
    { text: "不要因为结束而哭泣，微笑吧，为你的曾经拥有。", author: "苏斯博士" },
    { text: "人生没有彩排，每一天都是现场直播。", author: "佚名" }
];
const quoteDisplay = document.getElementById('quoteDisplay');
const quoteAuthor = document.getElementById('quoteAuthor');
const refreshBtn = document.getElementById('refreshBtn');
const counterElement = document.getElementById('counter');
let counter = 1;
let lastQuoteIndex = -1;
// 获取随机名言
function getRandomQuote() {
    let randomIndex;
    // 确保不连续出现相同的名言
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex && quotes.length > 1);
    lastQuoteIndex = randomIndex;
    return quotes[randomIndex];
}
// 更新显示的名言
function updateQuote() {
    // 添加淡出效果
    quoteDisplay.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    setTimeout(() => {
        const quote = getRandomQuote();
        quoteDisplay.textContent = quote.text;
        quoteAuthor.textContent = "— " + quote.author;
        // 添加淡入效果
        quoteDisplay.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
        // 添加动画类
        quoteDisplay.classList.add('fade-in');
        setTimeout(() => {
            quoteDisplay.classList.remove('fade-in');
        }, 800);
        // 更新计数器
        counter++;
        counterElement.textContent = counter;
    }, 300);
}
// 页面加载时显示随机名言
window.onload = updateQuote;
// 按钮点击事件
refreshBtn.addEventListener('click', updateQuote);
// 添加键盘支持 - 按空格键刷新
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        updateQuote();
        // 防止空格键滚动页面
        e.preventDefault();
    }
});

///2 在线时间

function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = weekdays[now.getDay()];
    const timeString = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}
${weekday}`;
    document.getElementById('timeDisplay').textContent = timeString;
}
// 初始调用
updateTime();
// 每秒更新一次时间
setInterval(updateTime, 1000);

///3 方程求解

function calculateRoots() {
    // 获取输入值
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    // 验证输入
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        showResult("请输入有效的数字！");
        return;
    }
    // 处理特殊情况
    if (a === 0) {
        showResult("a不能为0（这不是二次方程）");
        return;
    }
    // 计算判别式
    const discriminant = b * b - 4 * a * c;
    let resultText = "";
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultText = `有两个不相等的实数根：<br />
                 x₁ = ${root1.toFixed(2)}<br />
                 x₂ = ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        resultText = `有一个相等的实数根：<br />
                 x = ${root.toFixed(2)}`;
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        resultText = `没有实数根，有共轭复数根：<br />
                 x₁ = ${realPart} + ${imaginaryPart}i<br />
                 x₂ = ${realPart} - ${imaginaryPart}i`;
    }
    showResult(resultText);
}
function showResult(text) {
    document.getElementById('result').innerHTML = text;
}

///4 节拍器

let audioContext;
let isRunning = false;
let nextTickTime = 0;
let interval = 0;
const visual = document.getElementById('visual');
// 初始化音频环境
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}
// 生成节拍声
function playTick() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.frequency.setValueAtTime(8000, audioContext.currentTime); // 频率
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    oscillator.stop(audioContext.currentTime + 0.1);
    // 视觉反馈
    visual.style.backgroundColor = '#4CAF50';
    setTimeout(() => {
        visual.style.backgroundColor = '#f0f0f0';
    }, 50);
}
// 使用 requestAnimationFrame 实现高精度定时
function scheduleTicks() {
    if (!isRunning) return;
    const currentTime = audioContext.currentTime * 1000; // 转换为毫秒
    while (nextTickTime <= currentTime) {
        playTick();
        nextTickTime += interval;
    }
    requestAnimationFrame(scheduleTicks);
}
// 开始节拍器
function startMetronome() {
    if (isRunning) return;
    initAudio();
    const bpm = parseInt(document.getElementById('bpm').value);
    interval = 60000 / bpm; // 计算间隔时间（毫秒）
    isRunning = true;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    nextTickTime = audioContext.currentTime * 1000; // 初始化下一拍时间
    scheduleTicks(); // 启动调度
}
// 停止节拍器
function stopMetronome() {
    isRunning = false;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    visual.style.backgroundColor = '#f0f0f0';
}
// 输入验证
document.getElementById('bpm').addEventListener('input', function (e) {
    let value = parseInt(e.target.value);
    if (value < 1) value = 1;
    if (value > 300) value = 300;
    e.target.value = value;
});

///5 日历

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let today = currentDate.getDate();
function generateCalendar(year, month) {
    const calendarBody = document.getElementById('calendar-body');
    const monthYearDisplay = document.getElementById('monthYear');
    // 清空日历
    calendarBody.innerHTML = '';
    // 设置月份和年份显示
    const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月",
        "七月", "八月", "九月", "十月", "十一月", "十二月"];
    monthYearDisplay.textContent = `${year}年 ${monthNames[month]}`;
    // 获取当月第一天和最后一天
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    // 获取第一天是星期几 (0是周日，6是周六)
    let firstDayOfWeek = firstDay.getDay();
    // 转换为周一到周日 (0-6 对应 周一到周日)
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    // 创建日历表格
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // 最多只需要6行
        if (date > daysInMonth) break;
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDayOfWeek) {
                // 上个月的日期
                const prevMonthLastDay = new Date(year, month, 0).getDate();
                cell.textContent = prevMonthLastDay - (firstDayOfWeek - j - 1);
                cell.classList.add('other-month');
            } else if (date > daysInMonth) {
                // 下个月的日期
                cell.textContent = date - daysInMonth;
                cell.classList.add('other-month');
                date++;
            } else {
                // 当月日期
                if (date === today && year === currentDate.getFullYear() && month === currentDate.getMonth()) {
                    const todaySpan = document.createElement('span');
                    todaySpan.textContent = date;
                    todaySpan.classList.add('today');
                    cell.appendChild(todaySpan);
                } else {
                    cell.textContent = date;
                }
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}
// 初始生成日历
generateCalendar(currentYear, currentMonth);
// 上个月按钮事件
document.getElementById('prevMonth').addEventListener('click', function () {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
});
// 下个月按钮事件
document.getElementById('nextMonth').addEventListener('click', function () {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
});

///6 超链接

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        sections.forEach((section) => {
            if (section === targetSection) {
                section.classList.add('active');
                link.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        navLinks.forEach((otherLink) => {
            if (otherLink !== link) {
                otherLink.classList.remove('active');
            }
        });
    });
});
document.querySelectorAll('a').forEach((a) => {
    if (!a.closest('nav a')) {
        a.target = '_blank';
    }
});

///7 文本转语音

// 获取DOM元素
const textArea = document.getElementById('text-to-speak');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');
const languageSelect = document.getElementById('language-select');
const volumeSlider = document.getElementById('volume-slider');
const rateSlider = document.getElementById('rate-slider');
const pitchSlider = document.getElementById('pitch-slider');
const volumeValue = document.getElementById('volume-value');
const rateValue = document.getElementById('rate-value');
const pitchValue = document.getElementById('pitch-value');
const statusMessage = document.getElementById('status-message');
const bars = document.querySelectorAll('.bar');
// 初始化语音合成
const synth = window.speechSynthesis;
let utterance;
let animationFrame;
// 更新滑块值显示
volumeSlider.addEventListener('input', () => {
    volumeValue.textContent = volumeSlider.value;
});
rateSlider.addEventListener('input', () => {
    rateValue.textContent = rateSlider.value;
});
pitchSlider.addEventListener('input', () => {
    pitchValue.textContent = pitchSlider.value;
});
// 播放语音
playButton.addEventListener('click', () => {
    if (synth.speaking) {
        synth.cancel();
    }
    const text = textArea.value;
    if (text) {
        utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = languageSelect.value;
        utterance.volume = parseFloat(volumeSlider.value);
        utterance.rate = parseFloat(rateSlider.value);
        utterance.pitch = parseFloat(pitchSlider.value);

        // 事件监听器
        utterance.onstart = () => {
            statusMessage.textContent = '播放中...';
            playButton.disabled = true;
            animateBars();
        };
        utterance.onend = () => {
            statusMessage.textContent = '播放完成';
            playButton.disabled = false;
            cancelAnimationFrame(animationFrame);
            resetBars();
        };
        utterance.onerror = (event) => {
            statusMessage.textContent = '发生错误: ' + event.error;
            playButton.disabled = false;
            cancelAnimationFrame(animationFrame);
            resetBars();
        };
        synth.speak(utterance);
    } else {
        statusMessage.textContent = '请输入要转换的文字';
    }
});
// 暂停语音
pauseButton.addEventListener('click', () => {
    if (synth.speaking && !synth.paused) {
        synth.pause();
        statusMessage.textContent = '已暂停';
        cancelAnimationFrame(animationFrame);
        resetBars();
    }
});
// 继续播放
resumeButton.addEventListener('click', () => {
    if (synth.speaking && synth.paused) {
        synth.resume();
        statusMessage.textContent = '继续播放...';
        animateBars();
    }
});
// 初始化页面时禁用暂停和继续按钮
window.onload = () => {
    pauseButton.disabled = true;
    resumeButton.disabled = true;
    // 监听语音合成状态变化
    setInterval(() => {
        if (synth.speaking) {
            pauseButton.disabled = false;
            resumeButton.disabled = synth.paused ? false : true;
        } else {
            pauseButton.disabled = true;
            resumeButton.disabled = true;
        }
    }, 100);
};

///8 颜色切换

const darkModeButton = document.getElementById('darkModeButton');
const lightModeButton = document.getElementById('lightModeButton');
const textColorInput = document.getElementById('textColor');
const backgroundColorInput = document.getElementById('backgroundColor');

darkModeButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = 'white';
});

lightModeButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = '#333';
});

textColorInput.addEventListener('change', (e) => {
    document.body.style.color = e.target.value;
});

backgroundColorInput.addEventListener('change', (e) => {
    document.body.style.backgroundColor = e.target.value;
});

///9 iframe加载
function loadIframe(frameNumber) {
    const buttonId = `button${frameNumber}`;
    const iframeId = `iframe${frameNumber}`;
    const button = document.getElementById(buttonId);
    const iframe = document.getElementById(iframeId);

    if (button.disabled) return;

    button.disabled = true;
    iframe.style.display = 'block';
    if (frameNumber === 1) {
        iframe.src = 'http://game.webxinxin.com/flappybird/';
    } else if (frameNumber === 2) {
        iframe.src = 'https://www.minesweeper.cn/';
    } else if (frameNumber === 3) {
        iframe.src = 'https://www.2048.org/';
    }
}

///10 新闻
const API_CONFIG = {
    url: 'https://api.shwgij.com/api/news/fastnews/news_rest',
    params: {
        key: '***',
        num: '15',
        filter: '0',
        threshold: '0.6'
    }
};

document.getElementById('loadBtn').onclick = loadNews;

function loadNews() {
    const btn = document.getElementById('loadBtn');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const content = document.getElementById('content');

    btn.disabled = true;
    btn.textContent = '加载中...';
    loading.style.display = 'block';
    error.style.display = 'none';
    content.style.display = 'none';

    const url = buildURL();
    const xhr = new XMLHttpRequest();

    xhr.timeout = 5000;
    xhr.responseType = 'json';

    xhr.onload = function () {
        loading.style.display = 'none';

        if (xhr.status >= 200 && xhr.status < 300) {
            const res = xhr.response;
            if (res && (res.code === 201 || res.code === 200)) {
                displayNews(res.data);
                btn.style.display = 'none';
            } else {
                showError('API错误: ' + (res ? res.msg || res.code : '未知错误'));
            }
        } else {
            showError('HTTP错误: ' + xhr.status);
        }
    };

    xhr.onerror = function () {
        loading.style.display = 'none';
        showError('网络错误，请检查连接');
    };

    xhr.ontimeout = function () {
        loading.style.display = 'none';
        showError('请求超时');
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function buildURL() {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(API_CONFIG.params)) {
        params.append(key, value);
    }
    return API_CONFIG.url + '?' + params.toString();
}

function displayNews(data) {
    if (!data) {
        showError('数据格式错误');
        return;
    }

    document.getElementById('newsTitle').textContent = data.title || '今日新闻';
    document.getElementById('dateInfo').textContent = data.date || new Date().toLocaleDateString();

    const newsList = document.getElementById('newsList');
    if (data.news && data.news.length > 0) {
        let newsHtml = '';
        data.news.forEach((item, i) => {
            newsHtml += `<div class="news-item">
                <span class="news-index">${i + 1}</span>${item}
            </div>`;
        });
        newsList.innerHTML = newsHtml;
    } else {
        newsList.innerHTML = '<div class="error">暂无新闻内容</div>';
    }

    const weiyuBox = document.getElementById('weiyuBox');
    if (data.weiyu) {
        weiyuBox.textContent = data.weiyu;
        weiyuBox.style.display = 'block';
    }

    document.getElementById('content').style.display = 'block';
}

function showError(msg) {
    const error = document.getElementById('error');
    const btn = document.getElementById('loadBtn');

    error.textContent = msg;
    error.style.display = 'block';
    btn.disabled = false;
    btn.textContent = '📰 重新加载新闻';
}

//11 iframe折叠
let isExpanded = false;

function toggleIframe() {
    const container = document.getElementById('iframeContainer');
    const button = document.querySelector('.toggle-btn');

    isExpanded = !isExpanded;

    if (isExpanded) {
        container.classList.add('expanded');
        button.textContent = '折叠内容 ▲';
    } else {
        container.classList.remove('expanded');
        button.textContent = '展开内容 ▼';
    }
}