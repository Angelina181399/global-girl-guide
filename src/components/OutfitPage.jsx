// src/components/OutfitPage.jsx
import React, { useState } from 'react';

const bodyShapes = [
  {
    value: 'hourglass',
    label: '沙漏型',
    desc: '肩膀和臀部宽度大致相等，腰部明显纤细。',
    img: 'https://via.placeholder.com/150?text=沙漏型',
  },
  {
    value: 'pear',
    label: '梨形',
    desc: '臀部比肩膀宽，腰部有明显曲线。',
    img: 'https://via.placeholder.com/150?text=梨形',
  },
  {
    value: 'apple',
    label: '苹果型',
    desc: '腰部比臀部粗，腹部突出。',
    img: 'https://via.placeholder.com/150?text=苹果型',
  },
  {
    value: 'inverted_triangle',
    label: '倒三角型',
    desc: '肩膀比臀部宽，腰部不明显。',
    img: 'https://via.placeholder.com/150?text=倒三角型',
  },
  {
    value: 'rectangle',
    label: 'H型',
    desc: '臀部和肩膀宽度大致相等，腰部不明显。',
    img: 'https://via.placeholder.com/150?text=H型',
  },
];

const skinTones = [
  {
    key: 'cool',
    name: '冷色调',
    desc: '血管偏蓝，适合银色、蓝色、紫色等冷色系。',
    img: 'https://via.placeholder.com/150/8ecae6/fff?text=冷色调',
  },
  {
    key: 'warm',
    name: '暖色调',
    desc: '血管偏绿，适合金色、橙色、棕色等暖色系。',
    img: 'https://via.placeholder.com/150/fed9b7/fff?text=暖色调',
  },
  {
    key: 'neutral',
    name: '中性色调',
    desc: '冷暖皆宜，适合多种颜色。',
    img: 'https://via.placeholder.com/150/fff1e6/333?text=中性',
  },
];

const OutfitPage = () => {
  const [selectedBody, setSelectedBody] = useState(null);
  const [selectedSkin, setSelectedSkin] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">穿搭推荐系统</h2>

      {/* 体型判断 */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">请选择你的体型</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bodyShapes.map((shape) => (
            <div
              key={shape.value}
              className={`border rounded-lg p-4 text-center cursor-pointer transition ${
                selectedBody === shape.value ? 'border-primary-500 shadow-lg' : 'hover:border-gray-400'
              }`}
              onClick={() => setSelectedBody(shape.value)}
            >
              <img src={shape.img} alt={shape.label} className="mx-auto mb-2 rounded" />
              <h4 className="font-bold">{shape.label}</h4>
              <p className="text-sm text-gray-600">{shape.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 肤色判断 */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">请选择你的肤色</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skinTones.map((tone) => (
            <div
              key={tone.key}
              className={`border rounded-lg p-4 text-center cursor-pointer transition ${
                selectedSkin === tone.key ? 'border-primary-500 shadow-lg' : 'hover:border-gray-400'
              }`}
              onClick={() => setSelectedSkin(tone.key)}
            >
              <img src={tone.img} alt={tone.name} className="mx-auto mb-2 rounded" />
              <h4 className="font-bold">{tone.name}</h4>
              <p className="text-sm text-gray-600">{tone.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 推荐结果 */}
      <section>
        <h3 className="text-xl font-semibold mb-4">初步建议</h3>
        {selectedBody && selectedSkin ? (
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <p className="mb-2">
              根据你的体型（<strong>{bodyShapes.find((s) => s.value === selectedBody).label}</strong>）和肤色（
              <strong>{skinTones.find((s) => s.key === selectedSkin).name}</strong>），我们建议：
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-700">
              <li>选择适合你身形轮廓的剪裁，比如突出腰线或修饰肩部。</li>
              <li>在颜色选择上，优先考虑与你肤色匹配的色系。</li>
              <li>你可以尝试搜索品牌如 <strong>House of CB</strong>、<strong>Norma Kamali</strong> 等，找到适合的款式。</li>
            </ul>
          </div>
        ) : (
          <p className="text-gray-600">请选择你的体型和肤色以查看穿搭建议。</p>
        )}
      </section>
    </div>
  );
};

export default OutfitPage;
