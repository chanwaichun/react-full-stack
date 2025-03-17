import React from "react";
import "./index.moudle.scss";

type HtmlContentProps = {
	htmlString: string;
};
const HtmlContent = ({htmlString}: HtmlContentProps) => {
	return <div dangerouslySetInnerHTML={{__html: htmlString}} />;
};

export default function Home() {
	const string = `
<div class="home-page">
  <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <a href="#" class="text-xl font-bold gradient-text">光影记录</a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#" class="text-gray-600 hover:text-gray-900">首页</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">作品集</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">关于我</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">联系</a>
                    <button class="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
                        订阅更新
                    </button>
                </div>
                <div class="md:hidden">
                    <button class="text-gray-600">
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-5xl font-bold leading-tight mb-6">
                        捕捉光与影的<br/>
                        <span class="gradient-text">瞬间之美</span>
                    </h1>
                    <p class="text-xl text-gray-600 mb-8">
                        用镜头记录世界，分享独特的视角与故事
                    </p>
                    <div class="flex gap-4">
                        <button class="bg-gray-900 text-white px-8 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
                            探索作品
                        </button>
                        <button class="bg-gray-100 text-gray-900 px-8 py-3 rounded-full text-sm hover:bg-gray-200 transition-colors">
                            关于我
                        </button>
                    </div>
                </div>
                <div class="relative">
                    <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                    <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
                    <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" 
                         alt="摄影展示" 
                         class="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">摄影分类</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    探索不同主题的摄影作品，感受独特的视觉体验
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-sm">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <i data-feather="camera" class="text-blue-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">人像摄影</h3>
                    <p class="text-gray-600">捕捉人物瞬间，展现内心情感</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                        <i data-feather="image" class="text-purple-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">风景摄影</h3>
                    <p class="text-gray-600">记录大自然的壮丽景色</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <i data-feather="coffee" class="text-green-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">生活随拍</h3>
                    <p class="text-gray-600">分享日常生活中的美好时刻</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">精选作品</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    精心挑选的摄影作品，记录美好瞬间
                </p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 image-grid">
                <div class="group relative overflow-hidden rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=80" 
                         alt="自然风光"
                         class="w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent">
                        <div class="absolute bottom-6 left-6">
                            <h4 class="text-white font-semibold mb-1">山川日落</h4>
                            <p class="text-gray-300 text-sm">风景摄影</p>
                        </div>
                    </div>
                </div>
                <div class="group relative overflow-hidden rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&w=500&q=80" 
                         alt="人像写真"
                         class="w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent">
                        <div class="absolute bottom-6 left-6">
                            <h4 class="text-white font-semibold mb-1">光影人像</h4>
                            <p class="text-gray-300 text-sm">人像摄影</p>
                        </div>
                    </div>
                </div>
                <div class="group relative overflow-hidden rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&w=500&q=80" 
                         alt="城市街拍"
                         class="w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent">
                        <div class="absolute bottom-6 left-6">
                            <h4 class="text-white font-semibold mb-1">城市印象</h4>
                            <p class="text-gray-300 text-sm">街头摄影</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-8">订阅更新</h2>
            <p class="text-gray-400 max-w-2xl mx-auto mb-8">
                订阅我的摄影更新，第一时间获取最新作品和摄影技巧分享
            </p>
            <button class="bg-white text-gray-900 px-8 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors">
                立即订阅
            </button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-100 py-12">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <a href="#" class="text-xl font-bold gradient-text">光影记录</a>
                    <p class="text-gray-600 mt-4">用镜头记录生活中的每个精彩瞬间</p>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">关于</h4>
                    <div class="space-y-2">
                        <a href="#" class="block text-gray-600 hover:text-gray-900">关于我</a>
                        <a href="#" class="block text-gray-600 hover:text-gray-900">作品集</a>
                        <a href="#" class="block text-gray-600 hover:text-gray-900">摄影服务</a>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">资源</h4>
                    <div class="space-y-2">
                        <a href="#" class="block text-gray-600 hover:text-gray-900">摄影教程</a>
                        <a href="#" class="block text-gray-600 hover:text-gray-900">器材推荐</a>
                        <a href="#" class="block text-gray-600 hover:text-gray-900">后期技巧</a>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">联系我</h4>
                    <div class="space-y-2">
                        <p class="text-gray-600">contact@photography.com</p>
                        <p class="text-gray-600">微信：PhotoArt</p>
                    </div>
                </div>
            </div>
           
        </div>
    </footer>
    </div>
`;
	return (
		<div className={"home"}>
			<HtmlContent htmlString={string}></HtmlContent>;
			<div className="border-t border-gray-100 mt-12 p-8 text-center text-gray-600">
				<p><a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备2025385764号</a></p>
			</div>

		</div>
	);
}
