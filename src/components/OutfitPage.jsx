import React, { useState } from 'react';

const OutfitPage = () => {
  const [formData, setFormData] = useState({
    bodyType: '',
    skinTone: '',
    occasion: ''
  });
  
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 选项数据
  const bodyTypes = [
    { value: 'O型', label: 'O型（苹果型）' },
    { value: 'X型', label: 'X型（沙漏型）' },
    { value: 'H型', label: 'H型（直筒型）' },
    { value: 'A型', label: 'A型（梨型）' },
    { value: 'Y型', label: 'Y型（倒三角型）' }
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
      </div>
    </div>
  );
};

export default OutfitPage; 