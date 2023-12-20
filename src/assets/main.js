const url = 'https://api.escuelajs.co/api/v1/products';
const content = document.getElementById('content');

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const productos = await fetchData(url);
        
        let view = `${productos.map(producto => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${producto.images[0]}" 
                    alt="${producto.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${producto.title}
                    </h3>
                </div>
            </div>
            `).slice(0,4).join('')}`

        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();