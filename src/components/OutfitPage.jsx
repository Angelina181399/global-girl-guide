import React, { useState } from 'react';

// 体型选项
const bodyShapes = [
  { key: 'hourglass', label: 'X 型（沙漏型）' },
  { key: 'pear', label: '梨形' },
  { key: 'apple', label: '苹果型' },
  { key: 'invertedTriangle', label: '倒三角型' },
  { key: 'rectangle', label: 'H 型（矩形型）' },
];

// 肤色选项（简洁版）
const skinTones = [
  { key: 'cool', label: '冷色调' },
  { key: 'warm', label: '暖色调' },
  { key: 'neutral', label: '中性色调' },
  { key: 'fair', label: '肤色较浅' },
  { key: 'deep', label: '肤色较深' },
];

// 场合选项
const occasions = [
  { key: 'prom', label: 'Prom（毕业舞会）' },
  { key: 'homecoming', label: 'Homecoming（返校节）' },
  { key: 'formaldinner', label: 'Formal Dinner（正式晚宴）' },
];

// 品牌选项和对应信息
const brands = [
  {
    key: 'houseofcb',
    label: 'House of CB',
    style: '性感修身、礼服为主',
    priceRange: '￥1500-3000',
    suitableFor: 'X型、H型身材',
    pros: '显身材、设计感强',
    cons: '价格偏高、尺码偏小',
  },
  {
    key: 'normakamali',
    label: 'Norma Kamali',
    style: '极简、舒适、包容性强',
    priceRange: '￥1000-2500',
    suitableFor: '多种体型',
    pros: '舒适、包容性好',
    cons: '部分款式偏基础',
  },
  {
    key: 'freepeople',
    label: 'Free People',
    style: '波西米亚、休闲文艺',
    priceRange: '￥800-2000',
    suitableFor: 'A型、梨形、文艺风',
    pros: '风格独特、适合日常',
    cons: '部分款式不够正式',
  },
  {
    key: 'anthropologie',
    label: 'Anthropologie',
    style: '复古、优雅、花卉印花',
    priceRange: '￥1000-2500',
    suitableFor: '多种体型',
    pros: '花色丰富、剪裁多样',
    cons: '部分款式较花哨',
  },
  {
    key: 'forlovelemons',
    label: 'For Love & Lemons',
    style: '少女、蕾丝、甜美',
    priceRange: '￥1200-2200',
    suitableFor: '年轻女生、X型、H型',
    pros: '少女感强、细节丰富',
    cons: '风格局限、尺码偏小',
  },
];

function UserInfoForm() {
  const [bodyShape, setBodyShape] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [occasion, setOccasion] = useState('');
  const [brand, setBrand] = useState('');

  // 根据选中品牌key显示详细信息
  const selectedBrandInfo = brands.find(b => b.key === brand);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `体型: ${bodyShape}\n` +
      `肤色: ${skinTone}\n` +
      `场合: ${occasion}\n` +
      `品牌: ${brand}\n\n` +
      (selectedBrandInfo
        ? `品牌风格: ${selectedBrandInfo.style}\n价格区间: ${selectedBrandInfo.priceRange}\n适合人群: ${selectedBrandInfo.suitableFor}\n优点: ${selectedBrandInfo.pros}\n缺点: ${selectedBrandInfo.cons}`
        : '')
    );
    // 这里替换成你的提交逻辑
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">告诉我你的信息</h2>

      {/* 体型 */}
      <div className="mb-6">
        <label htmlFor="bodyShape" className="block font-semibold mb-2">请选择你的体型：</label>
        <select
          id="bodyShape"
          value={bodyShape}
          onChange={(e) => setBodyShape(e.target.value)}
          required
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>-- 请选择体型 --</option>
          {bodyShapes.map(shape => (
            <option key={shape.key} value={shape.label}>{shape.label}</option>
          ))}
        </select>
      </div>

      {/* 肤色 */}
      <div className="mb-6">
        <label htmlFor="skinTone" className="block font-semibold mb-2">请选择你的肤色：</label>
        <select
          id="skinTone"
          value={skinTone}
          onChange={(e) => setSkinTone(e.target.value)}
          required
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>-- 请选择肤色 --</option>
          {skinTones.map(tone => (
            <option key={tone.key} value={tone.label}>{tone.label}</option>
          ))}
        </select>
      </div>

      {/* 场合 */}
      <div className="mb-6">
        <label htmlFor="occasion" className="block font-semibold mb-2">请选择穿搭场合：</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>-- 请选择场合 --</option>
          {occasions.map(o => (
            <option key={o.key} value={o.label}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* 品牌 */}
      <div className="mb-6">
        <label htmlFor="brand" className="block font-semibold mb-2">请选择喜欢的品牌：</label>
        <select
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>-- 请选择品牌 --</option>
          {brands.map(b => (
            <option key={b.key} value={b.key}>{b.label}</option>
          ))}
        </select>
      </div>

      {/* 选中品牌详细信息展示 */}
      {selectedBrandInfo && (
        <div className="mb-6 p-4 border rounded bg-gray-50 text-gray-700">
          <h3 className="font-semibold mb-2">品牌信息：</h3>
          <p><strong>风格：</strong>{selectedBrandInfo.style}</p>
          <p><strong>价格区间：</strong>{selectedBrandInfo.priceRange}</p>
          <p><strong>适合人群：</strong>{selectedBrandInfo.suitableFor}</p>
          <p><strong>优点：</strong>{selectedBrandInfo.pros}</p>
          <p><strong>缺点：</strong>{selectedBrandInfo.cons}</p>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-primary-500 text-white py-2 rounded hover:bg-primary-600 transition"
      >
        提交
      </button>
    </form>
  );
}

export default UserInfoForm;