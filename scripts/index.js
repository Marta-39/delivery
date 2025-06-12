const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay')
    const cartBtn = document.querySelector('#cart-button')

    const openModal = () => {
        modal.classList.add('open')
    }

    const closeModal = () => {
        modal.classList.remove('open')
    }

    cartBtn.addEventListener('click', () => {
        openModal()
    })

    modal.addEventListener('click', (event) => {
        if (
            event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal()
        }
    })
}

const restFanc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            image: 'rest_1.jpg',
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца'
        },
        {
            id: 1,
            image: 'rest_2.jpg',
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца'
        },
        {
            id: 2,
            image: 'rest_3.jpg',
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца'
        },
        {
            id: 3,
            image: 'rest_4.jpg',
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца'
        },
        {
            id: 4,
            image: 'rest_5.jpg',
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца'
        },
        {
            id: 5,
            image: 'rest_6.jpg',
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width:100%; text-align:center;">Загрузка...</p>'
    }

    const randerResrs = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__image">
                                <img src="./images/rests/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card__discription">
                                <div class="products-card__discription-row">
                                    <h4 class="products-card__discription--title">${card.title}</h4>
                                    <div class="products-card__discription--badge">${card.time} мин</div>
                                </div>
                                <div class="products-card__discription-row">
                                    <div class="products-card__discription-info">
                                        <div class="products-card__discription-info--raiting">
                                            <img src="./images/icons/star.svg" alt="star">${card.rating}
                                        </div>
                                        <div class="products-card__discription-info--price">От ${card.price} ₽</div>
                                        <div class="products-card__discription-info--group">${card.type}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                `)
        })
    }

    if (container) {
        loading()

        setTimeout(() => {
            randerResrs(restArray)
        }, 2000)
    }
}

const goodFanc = () => {
    const container = document.querySelector('#goods-container')


    const goodArray = [
        {
            id: 0,
            image: 'good-1.jpg',
            name: 'Ролл угорь стандарт',
            text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250
        },
        {
            id: 1,
            image: 'good-2.jpg',
            name: 'Калифорния лосось стандарт',
            text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 250
        },
        {
            id: 2,
            image: 'good-3.jpg',
            name: 'Окинава стандарт',
            text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250
        },
        {
            id: 3,
            image: 'good-4.jpg',
            name: 'Цезарь маки хl',
            text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250
        },
        {
            id: 4,
            image: 'good-5.jpg',
            name: 'Ясай маки стандарт 185 г',
            text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250
        },
        {
            id: 5,
            image: 'good-6.jpg',
            name: 'Ролл с креветкой стандарт',
            text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width:100%; text-align:center;">Загрузка...</p>'
    }

    const randerGoods = (array) => {
        container.innerHTML = ''


        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                     <div class="products-card">
                            <div class="products-card__image">
                                <img src="./images/goods/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card__discription">
                                <div class="products-card__discription-col">
                                    <h5 class="products-card__discription--name">${card.name}</h5>
                                    <p class="products-card__discription--text">${card.text}</p>
                                </div>
                                <div class="products-card__discription-row">
                                    <div class="products-card__discription-controls">
                                        <button class="btn btn-primary">
                                            В корзину
                                            <img src="./images/icons/shopping-cart.svg" alt="shoping-card">
                                        </button>
                                        <span class="products-card__discription-controls--price">${card.price} ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                 `)
        })
    }

    if (container) {
        loading()

        setTimeout(() => {
            randerGoods(goodArray)
        }, 2000)
    }

}

modalFunc()
restFanc()
goodFanc()