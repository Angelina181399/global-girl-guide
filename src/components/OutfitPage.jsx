import React, { useState } from 'react';

const bodyShapes = [
  { key: 'H', name: 'H 型', desc: '肩、腰、臀宽度接近，线条直，适合突出腰线的穿搭。', img: 'https://via.placeholder.com/120x120?text=H型' },
  { key: 'X', name: 'X 型', desc: '肩宽≈臀宽，腰部明显，适合修身和突出曲线的穿搭。', img: 'https://via.placeholder.com/120x120?text=X型' },
  { key: 'A', name: '梨形', desc: '臀部宽于肩部，适合上浅下深、A字裙等穿搭。', img: 'https://via.placeholder.com/120x120?text=梨形' },
  { key: 'V', name: '倒三角', desc: '肩宽大于臀宽，适合下半身有设计感的穿搭。', img: 'https://via.placeholder.com/120x120?text=倒三角' },
];

const skinTones = [
  { key: 'cool', name: '冷色调', desc: '血管偏蓝，适合银色、蓝色、紫色等冷色系。', img: 'https://via.placeholder.com/120x120/8ecae6/fff?text=冷色调' },
  { key: 'warm', name: '暖色调', desc: '血管偏绿，适合金色、橙色、棕色等暖色系。', img: 'https://via.placeholder.com/120x120/fed9b7/fff?text=暖色调' },
  { key: 'neutral', name: '中性色调', desc: '冷暖皆宜，适合多种颜色。', img: 'https://via.placeholder.com/120x120/fff1e6/333?text=中性' },
  { key: 'fair', name: '肤色较浅', desc: '易晒伤，适合柔和浅色系。', img: 'https://via.placeholder.com/120x120/ffe5ec/333?text=浅肤' },
  { key: 'deep', name: '肤色较深', desc: '适合亮色、对比色穿搭。', img: 'https://via.placeholder.com/120x120/6d6875/fff?text=深肤' },
];

const occasions = [
  { key: 'banquet', name: '晚宴', desc: '推荐优雅礼服、精致配饰，突出气质。' },
  { key: 'beach', name: '海边婚礼', desc: '推荐飘逸长裙、草编包、凉鞋，轻松自然。' },
  { key: 'bar', name: '城市酒吧', desc: '推荐时髦套装、亮色单品，突出个性。' },
  { key: 'party', name: '休闲派对', desc: '推荐舒适休闲、色彩活泼的穿搭。' },
];

const brands = [
  { name: 'House of CB', style: '性感修身、礼服为主', price: '￥1500-3000', crowd: 'X型、H型身材', pros: '显身材、设计感强', cons: '价格偏高、尺码偏小' },
  { name: 'Norma Kamali', style: '极简、舒适、包容性强', price: '￥1000-2500', crowd: '多种体型', pros: '舒适、包容性好', cons: '部分款式偏基础' },
  { name: 'Free People', style: '波西米亚、休闲文艺', price: '￥800-2000', crowd: 'A型、梨形、文艺风', pros: '风格独特、适合日常', cons: '部分款式不够正式' },
  { name: 'Anthropologie', style: '复古、优雅、花卉印花', price: '￥1000-2500', crowd: '多种体型', pros: '花色丰富、剪裁多样', cons: '部分款式较花哨' },
  { name: 'For Love & Lemons', style: '少女、蕾丝、甜美', price: '￥1200-2200', crowd: '年轻女生、X型、H型', pros: '少女感强、细节丰富', cons: '风格局限、尺码偏小' },
];

const OutfitPage = () => {
  const [formData, setFormData] = useState({
    bodyType: '',
    skinTone: '',
    occasion: ''
  });
  
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userItem, setUserItem] = useState('');
  const [assistantResult, setAssistantResult] = useState('');

  // 选项数据
  const bodyTypes = [
    { value: 'slim', label: '瘦' },
    { value: 'tall', label: '高挑' },
    { value: 'curvy', label: '偏圆润' }
  ];

  const skinTones = [
    { value: 'cool', label: '冷皮' },
    { value: 'neutral', label: '中性' },
    { value: 'warm', label: '暖皮' }
  ];

  const occasions = [
    { value: 'prom', label: 'Prom' },
    { value: 'homecoming', label: 'Homecoming' },
    { value: 'casual-party', label: 'Casual Party' }
  ];

  // 穿搭推荐数据
  const outfitRecommendations = {
    'slim-cool-prom': {
      style: '优雅的A字裙搭配冷色调的丝质上衣，突出你的纤细身材和冷皮优势。选择深蓝色或银灰色的配饰来增添高级感。',
      items: [
        { name: 'A字裙', price: '$89', image: 'https://via.placeholder.com/150/4A90E2/FFFFFF?text=A字裙' },
        { name: '丝质上衣', price: '$65', image: 'https://via.placeholder.com/150/9B59B6/FFFFFF?text=丝质上衣' },
        { name: '高跟鞋', price: '$120', image: 'https://via.placeholder.com/150/34495E/FFFFFF?text=高跟鞋' }
      ]
    },
    'slim-cool-homecoming': {
      style: '选择一条修身的连衣裙，冷色调的配色方案会让你的肤色更加出众。搭配简约的配饰，展现青春活力。',
      items: [
        { name: '修身连衣裙', price: '$95', image: 'https://via.placeholder.com/150/3498DB/FFFFFF?text=连衣裙' },
        { name: '小包包', price: '$45', image: 'https://via.placeholder.com/150/8E44AD/FFFFFF?text=小包包' },
        { name: '平底鞋', price: '$75', image: 'https://via.placeholder.com/150/2C3E50/FFFFFF?text=平底鞋' }
      ]
    },
    'slim-cool-casual-party': {
      style: '休闲派对可以选择高腰牛仔裤搭配冷色调的上衣，既舒适又时尚。选择一些银色配饰来点缀整体造型。',
      items: [
        { name: '高腰牛仔裤', price: '$85', image: 'https://via.placeholder.com/150/2980B9/FFFFFF?text=牛仔裤' },
        { name: '冷色调上衣', price: '$55', image: 'https://via.placeholder.com/150/7D3C98/FFFFFF?text=上衣' },
        { name: '运动鞋', price: '$90', image: 'https://via.placeholder.com/150/1B4F72/FFFFFF?text=运动鞋' }
      ]
    },
    'tall-neutral-prom': {
      style: '高挑的身材适合选择长款礼服，中性肤色可以驾驭各种颜色。选择一条优雅的长裙，展现你的身高优势。',
      items: [
        { name: '长款礼服', price: '$150', image: 'https://via.placeholder.com/150/E74C3C/FFFFFF?text=长款礼服' },
        { name: '手拿包', price: '$60', image: 'https://via.placeholder.com/150/F39C12/FFFFFF?text=手拿包' },
        { name: '细跟鞋', price: '$110', image: 'https://via.placeholder.com/150/27AE60/FFFFFF?text=细跟鞋' }
      ]
    },
    'tall-neutral-homecoming': {
      style: '高挑身材在Homecoming中可以尝试短款连衣裙，中性肤色可以选择温暖的色调，既青春又优雅。',
      items: [
        { name: '短款连衣裙', price: '$100', image: 'https://via.placeholder.com/150/E67E22/FFFFFF?text=短款连衣裙' },
        { name: '链条包', price: '$50', image: 'https://via.placeholder.com/150/F1C40F/FFFFFF?text=链条包' },
        { name: '踝靴', price: '$95', image: 'https://via.placeholder.com/150/16A085/FFFFFF?text=踝靴' }
      ]
    },
    'tall-neutral-casual-party': {
      style: '高挑身材在休闲派对中可以尝试阔腿裤搭配紧身上衣，中性肤色适合选择大地色系的搭配。',
      items: [
        { name: '阔腿裤', price: '$80', image: 'https://via.placeholder.com/150/D35400/FFFFFF?text=阔腿裤' },
        { name: '紧身上衣', price: '$45', image: 'https://via.placeholder.com/150/F7DC6F/FFFFFF?text=紧身上衣' },
        { name: '小白鞋', price: '$85', image: 'https://via.placeholder.com/150/138D75/FFFFFF?text=小白鞋' }
      ]
    },
    'curvy-warm-prom': {
      style: '偏圆润的身材可以选择V领设计的礼服，暖皮适合选择金色、橙色等暖色调，既显瘦又提亮肤色。',
      items: [
        { name: 'V领礼服', price: '$130', image: 'https://via.placeholder.com/150/C0392B/FFFFFF?text=V领礼服' },
        { name: '金色手包', price: '$70', image: 'https://via.placeholder.com/150/E67E22/FFFFFF?text=金色手包' },
        { name: '坡跟鞋', price: '$100', image: 'https://via.placeholder.com/150/27AE60/FFFFFF?text=坡跟鞋' }
      ]
    },
    'curvy-warm-homecoming': {
      style: '偏圆润身材在Homecoming中可以选择A字裙，暖皮适合选择温暖的色调，既青春又显瘦。',
      items: [
        { name: 'A字裙', price: '$90', image: 'https://via.placeholder.com/150/D35400/FFFFFF?text=A字裙' },
        { name: '斜挎包', price: '$55', image: 'https://via.placeholder.com/150/F39C12/FFFFFF?text=斜挎包' },
        { name: '平底鞋', price: '$80', image: 'https://via.placeholder.com/150/16A085/FFFFFF?text=平底鞋' }
      ]
    },
    'curvy-warm-casual-party': {
      style: '偏圆润身材在休闲派对中可以选择高腰设计的裤装，暖皮适合选择温暖的色调，既舒适又时尚。',
      items: [
        { name: '高腰裤', price: '$75', image: 'https://via.placeholder.com/150/BA4A00/FFFFFF?text=高腰裤' },
        { name: '暖色调上衣', price: '$50', image: 'https://via.placeholder.com/150/F4D03F/FFFFFF?text=暖色调上衣' },
        { name: '乐福鞋', price: '$90', image: 'https://via.placeholder.com/150/138D75/FFFFFF?text=乐福鞋' }
      ]
    }
  };

  // 处理表单变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 生成推荐
  const generateRecommendations = () => {
    if (!formData.bodyType || !formData.skinTone || !formData.occasion) {
      alert('请填写所有信息！');
      return;
    }

    setIsLoading(true);
    
    // 模拟加载时间
    setTimeout(() => {
      const key = `${formData.bodyType}-${formData.skinTone}-${formData.occasion}`;
      const recommendation = outfitRecommendations[key];
      
      if (recommendation) {
        setRecommendations([recommendation]);
      } else {
        // 如果没有完全匹配的组合，使用默认推荐
        setRecommendations([{
          style: '根据你的选择，我们为你推荐了一套适合的穿搭。这套搭配既考虑了你的体型特点，也照顾到了肤色和场合的需求。',
          items: [
            { name: '推荐单品1', price: '$80', image: 'https://via.placeholder.com/150/EC7063/FFFFFF?text=单品1' },
            { name: '推荐单品2', price: '$65', image: 'https://via.placeholder.com/150/A569BD/FFFFFF?text=单品2' },
            { name: '推荐单品3', price: '$95', image: 'https://via.placeholder.com/150/5DADE2/FFFFFF?text=单品3' }
          ]
        }]);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  // 搭配助手简单逻辑
  const handleAssistant = () => {
    if (!userItem.trim()) {
      setAssistantResult('请先输入你的服饰信息！');
      return;
    }
    setAssistantResult(`建议：${userItem} 可搭配银色高跟鞋、简约耳环和亮色手包，整体更有层次感。`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* 页面标题 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            👗 穿搭推荐系统
          </h1>
          <p className="text-center text-gray-600 mt-2">
            根据你的体型、肤色和场合，获得个性化穿搭建议
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 体型分析模块 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">体型分析</h2>
          <p className="mb-4 text-gray-700">常见体型有 H 型、X 型、梨形、倒三角等。可参考下图判断自己的体型：</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-2">
            {bodyShapes.map(shape => (
              <div key={shape.key} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <img src={shape.img} alt={shape.name} className="mb-2 w-20 h-20 object-contain" />
                <div className="font-semibold mb-1">{shape.name}</div>
                <div className="text-xs text-gray-500 text-center">{shape.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 肤色测评模块 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">肤色测评</h2>
          <p className="mb-4 text-gray-700">判断方法：观察手腕血管颜色、佩戴金银饰品的适配度、肤色深浅等。常见类型如下：</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-2">
            {skinTones.map(tone => (
              <div key={tone.key} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <img src={tone.img} alt={tone.name} className="mb-2 w-20 h-20 object-contain" />
                <div className="font-semibold mb-1">{tone.name}</div>
                <div className="text-xs text-gray-500 text-center">{tone.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 搭配助手模块 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">智能搭配助手</h2>
          <p className="mb-4 text-gray-700">输入你已有的服饰（如“黑色V领长裙”），系统将为你推荐搭配建议：</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-2">
            <input
              type="text"
              className="flex-1 border border-pink-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400"
              placeholder="请输入你的服饰信息"
              value={userItem}
              onChange={e => setUserItem(e.target.value)}
            />
            <button
              className="btn-primary px-6"
              onClick={handleAssistant}
            >
              获取搭配建议
            </button>
          </div>
          {assistantResult && <div className="mt-3 text-green-600 font-medium">{assistantResult}</div>}
        </section>

        {/* 场合搭配模块 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">场合搭配</h2>
          <p className="mb-4 text-gray-700">根据不同场合，选择合适的风格和单品，让你更出片：</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {occasions.map(oc => (
              <div key={oc.key} className="bg-white rounded-xl shadow p-4">
                <div className="font-semibold mb-1">{oc.name}</div>
                <div className="text-xs text-gray-500 mb-1">{oc.desc}</div>
                <div className="text-xs text-gray-400">出片指南：选择适合场景的配色和配饰，注意整体协调。</div>
              </div>
            ))}
          </div>
        </section>

        {/* 品牌推荐模块 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">品牌推荐</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brands.map(brand => (
              <div key={brand.name} className="bg-white rounded-xl shadow p-4">
                <div className="font-semibold text-lg mb-1">{brand.name}</div>
                <div className="text-xs text-gray-500 mb-1">风格：{brand.style}</div>
                <div className="text-xs text-gray-500 mb-1">价格区间：{brand.price}</div>
                <div className="text-xs text-gray-500 mb-1">适合人群：{brand.crowd}</div>
                <div className="text-xs text-green-600 mb-1">优点：{brand.pros}</div>
                <div className="text-xs text-red-500">劣势：{brand.cons}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 原有穿搭推荐系统模块（可放最后） */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">个性化穿搭推荐</h2>
          {/* 这里保留原有推荐表单和结果展示代码 */}
          {/* 表单部分 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              告诉我你的信息
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 体型选择 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  体型
                </label>
                <select
                  name="bodyType"
                  value={formData.bodyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">请选择体型</option>
                  {bodyTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 肤色选择 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  肤色
                </label>
                <select
                  name="skinTone"
                  value={formData.skinTone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">请选择肤色</option>
                  {skinTones.map(tone => (
                    <option key={tone.value} value={tone.value}>
                      {tone.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 场合选择 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  场合
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">请选择场合</option>
                  {occasions.map(occasion => (
                    <option key={occasion.value} value={occasion.value}>
                      {occasion.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 生成按钮 */}
            <div className="text-center mt-8">
              <button
                onClick={generateRecommendations}
                disabled={isLoading}
                className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    生成中...
                  </div>
                ) : (
                  '✨ 生成推荐'
                )}
              </button>
            </div>
          </div>

          {/* 推荐结果 */}
          {recommendations.length > 0 && (
            <div className="space-y-8">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* 风格描述 */}
                  <div className="p-6 md:p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      💡 穿搭风格建议
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {recommendation.style}
                    </p>
                  </div>

                  {/* 推荐单品 */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      🛍 推荐单品
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {recommendation.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                          />
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {item.name}
                          </h4>
                          <p className="text-primary-600 font-medium mb-3">
                            {item.price}
                          </p>
                          <a
                            href="#"
                            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                          >
                            查看详情
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 提示信息 */}
          {recommendations.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👗</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                填写信息开始获得推荐
              </h3>
              <p className="text-gray-600">
                选择你的体型、肤色和场合，我们将为你提供个性化的穿搭建议
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default OutfitPage; 