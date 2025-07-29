// src/components/OutfitPage.jsx
import React, { useState } from 'react';

const bodyShapes = [
  { key: 'hourglass', label: '沙漏型', desc: '肩膀和臀部宽度大致相等，腰部明显纤细。' },
  { key: 'pear', label: '梨形', desc: '臀部比肩膀宽，腰部有明显曲线。' },
  { key: 'apple', label: '苹果型', desc: '腰部比臀部粗，腹部突出。' },
  { key: 'invertedTriangle', label: '倒三角型', desc: '肩膀比臀部宽，腰部不明显。' },
  { key: 'rectangle', label: 'H型', desc: '臀部和肩膀宽度大致相等，腰部不明显。' },
];

const skinTones = [
  { key: 'cool', label: '冷色调', desc: '血管偏蓝，适合银色、蓝色、紫色等冷色系。' },
  { key: 'warm', label: '暖色调', desc: '血管偏绿，适合金色、橙色、棕色等暖色系。' },
  { key: 'neutral', label: '中性色调', desc: '冷暖皆宜，适合多种颜色。' },
  { key: 'fair', label: '肤色较浅', desc: '易晒伤，适合柔和浅色系。' },
  { key: 'deep', label: '肤色较深', desc: '适合亮色、对比色穿搭。' },
];

const occasions = [
  { key: 'prom', label: '毕业舞会' },
  { key: 'homecoming', label: '返校舞会' },
  { key: 'formaldinner', label: '正式晚宴' },
];

const brands = [
  {
    name: 'House of CB',
    style: '性感修身、礼服为主',
    priceRange: '￥1500-3000',
    suitableShapes: ['hourglass', 'rectangle'],
    pros: '显身材、设计感强',
    cons: '价格偏高、尺码偏小',
  },
  {
    name: 'Norma Kamali',
    style: '极简、舒适、包容性强',
    priceRange: '￥1000-2500',
    suitableShapes: ['hourglass', 'rectangle', 'pear', 'apple', 'invertedTriangle'],
    pros: '舒适、包容性好',
    cons: '部分款式偏基础',
  },
  {
    name: 'Free People',
    style: '波西米亚、休闲文艺',
    priceRange: '￥800-2000',
    suitableShapes: ['pear'],
    pros: '风格独特、适合日常',
    cons: '部分款式不够正式',
  },
  {
    name: 'Anthropologie',
    style: '复古、优雅、花卉印花',
    priceRange: '￥1000-2500',
    suitableShapes: ['hourglass', 'rectangle', 'pear', 'apple', 'invertedTriangle'],
    pros: '花色丰富、剪裁多样',
    cons: '部分款式较花哨',
  },
  {
    name: 'For Love & Lemons',
    style: '少女、蕾丝、甜美',
    priceRange: '￥1200-2200',
    suitableShapes: ['hourglass', 'rectangle'],
    pros: '少女感强、细节丰富',
    cons: '风格局限、尺码偏小',
  },
];

function OutfitPage() {
  const [bodyShape, setBodyShape] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [occasion, setOccasion] = useState('');
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    if (!bodyShape || !skinTone || !occasion) {
      alert('请完整选择体型、肤色和场合');
      return;
    }

    // 过滤适合体型的品牌
    const recommendedBrands = brands
      .filter(b => b.suitableShapes.includes(bodyShape))
      .map(b => b.name);

    const bodyShapeObj = bodyShapes.find(b => b.key === bodyShape);
    const skinToneObj = skinTones.find(s => s.key === skinTone);
    const occasionObj = occasions.find(o => o.key === occasion);

    setResult({
      text: `根据你的选择：
- 体型：${bodyShapeObj.label} — ${bodyShapeObj.desc}
- 肤色：${skinToneObj.label} — ${skinToneObj.desc}
- 场合：${occasionObj.label}

推荐你穿适合${skinToneObj.label}的颜色，搭配适合${bodyShapeObj.label}体型的服饰风格。
推荐品牌有：${recommendedBrands.join('，')}。`,
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">穿搭推荐</h2>

      {/* 体型选择 */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">请选择你的体型：</label>
        <select
          value={bodyShape}
          onChange={e => setBodyShape(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">请选择体型</option>
          {bodyShapes.map(shape => (
            <option key={shape.key} value={shape.key}>
              {shape.label}
            </option>
          ))}
        </select>
      </div>

      {/* 肤色选择 */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">请选择你的肤色：</label>
        <select
          value={skinTone}
          onChange={e => setSkinTone(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">请选择肤色</option>
          {skinTones.map(skin => (
            <option key={skin.key} value={skin.key}>
              {skin.label}
            </option>
          ))}
        </select>
      </div>

      {/* 场合选择 */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">请选择场合：</label>
        <select
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">请选择场合</option>
          {occasions.map(occ => (
            <option key={occ.key} value={occ.key}>
              {occ.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleGenerate}
        className="bg-primary-500 text-white py-3 px-6 rounded hover:bg-primary-600 transition"
      >
        生成穿搭推荐
      </button>

      {result && (
        <div className="mt-8 p-6 border rounded bg-gray-50 whitespace-pre-line">
          {result.text}
        </div>
      )}
    </div>
  );
}

export default OutfitPage;
