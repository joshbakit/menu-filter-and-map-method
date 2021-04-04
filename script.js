const menu = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://picsum.photos/200/200",
        "category": "breakfast",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "category": "lunch",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "category": "shake",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "category": "breakfast",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "category": "lunch",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "category": "shake",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "category": "breakfast",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "category": "lunch",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "category": "shake",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "category": "breakfast",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "category": "lunch",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "category": "shake",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "category": "breakfast",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 14,
        "title": "est necessitatibus architecto ut laborum",
        "category": "lunch",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 15,
        "title": "harum dicta similique quis dolore earum ex qui",
        "category": "shake",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 16,
        "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "category": "breakfast",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 17,
        "title": "natus doloribus necessitatibus ipsa",
        "category": "lunch",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
      {
        "albumId": 1,
        "id": 18,
        "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
        "category": "shake",
        "url": "https://picsum.photos/200/200",
        "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      }
]

const section = document.querySelector('._section');
const filterBtn = document.querySelectorAll('.btn');
window.addEventListener('DOMContentLoaded', function(){
    displayMenu(menu);  
});

filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if (menuItem.category === category){
                return menuItem;    
            }
        });
        if (category === 'all'){
            displayMenu(menu);
        } else {
            displayMenu(menuCategory);
        }
        });   
});

function displayMenu(menuItems){
    let display = menuItems.map(function(item){
        return `<div class="_item d-flex flex-row">
                <div class="m-3">
                    <img src=${item.url}>
                </div>
                <div class="m-3">
                    <div class="d-flex flex-row justify-content-between">
                        <h4>${item.title}</h4>
                        <p class="text-danger">${item.id}</p>
                    </div>
                    
                    <hr>
                    <p>${item.desc}</p>
                </div> 
                </div>`;
      });
      display = display.join('');
      section.innerHTML = display;
}