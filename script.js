let cont = document.querySelector('.container')
let btn_five = document.querySelector('[data-five]')
let btn_all = document.querySelector('[data-all]')
let total_view = document.querySelector('#total')
let saveds = []

btn_five.onclick = () => {
    reload(arr.slice(0, 5))
}

btn_all.onclick = () => {
    reload(arr)
}

reload(arr)

function reload(product) {
    cont.innerHTML = ""

    for (let item of product) {
        // create
        let div_item = document.createElement('div')
        let img = document.createElement('img')
        let descrip_div = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let button = document.createElement('button')
        let b = document.createElement('b')

        // styling
        div_item.classList.add('item')
        descrip_div.classList.add('description')

        img.src = /* item.image */
            img.alt = item.title

        h2.innerHTML = `${item.category} (${item.rating.count})`
        p.innerHTML = item.description.slice(0, 100)
        b.innerHTML = " read more..."
        button.innerHTML = "Save"

        // append
        div_item.append(img, descrip_div)
        descrip_div.append(h2, p, button)
        p.append(b)
        cont.append(div_item)

        // functions
        button.onclick = () => {
            if (saveds.includes(item.id)) {
                // delete
                let idx = saveds.indexOf(item.id)
                saveds.splice(idx, 1)
                button.classList.remove('active-btn')
                button.innerHTML = 'Save'
            } else {
                button.classList.add('active-btn')
                button.innerHTML = 'Добавлен в избранное'
                saveds.push(item.id)
            }
            total_view.innerHTML = saveds.length
            reload_cart(saveds)
        }
        b.onclick = () => {
            if (b.innerHTML === "close") {
                p.innerHTML = item.description.slice(0, 100)
                b.innerHTML = " read more..."
            } else {
                p.innerHTML = item.description
                b.innerHTML = "close"
            }
            p.append(b)
        }
    }
}

let open_Cart = document.querySelector('[data-cart]')
let closeCart = document.querySelector('.close_times2')
let body = document.querySelector('body')

open_Cart.onclick = () => {
    body.classList.toggle('showCart')
}

closeCart.onclick = () => {
    body.classList.toggle('showCart')
}

body.onclick = function (e) {
    if (e.target.className != 'delete') return
    let cartTab_bellissimo_pizza = e.target.closest('.cartTab_bellissimo_pizza')
    cartTab_bellissimo_pizza.remove()
}

let cartTab_div = document.createElement('div')

function reload_cart(reload) {
    cartTab_div.innerHTML = ""

    for (let item of reload) {
        let cartItem = arr.find(el => el.id === item)

        // create
        let cart_flex_bellissimo_pizza_div = document.createElement('div')
        let btn_close_items2 = document.createElement('button')
        let cartTab_bellissimo_pizza_div = document.createElement('div')
        let box_block_bellissimo_pizza_div = document.createElement('div')
        let img_photo = document.createElement('img')
        let p_text = document.createElement('p')
        let p_text_type_of_pizza = document.createElement('p')
        let counter_bellissimo_pizza_div = document.createElement('div')
        let minus_bellissimo_pizza_div = document.createElement('div')
        let digit_bellissimo_pizza_div = document.createElement('div')
        let plus_bellissimo_pizza_div = document.createElement('div')
        let price_bellissimo_pizza_p = document.createElement('p')
        let real_price_p = document.createElement('p')
        let trashIcon2_div = document.createElement('div')
        let trashIcon2_img = document.createElement('img')
        let p_trashIcon2_delete = document.createElement('delete')

        // styling
        cartTab_div.classList.add('cartTab')
        cart_flex_bellissimo_pizza_div.classList.add('cart_flex_bellissimo_pizza')
        btn_close_items2.classList.add('close_times2')
        btn_close_items2.innerHTML = "X"
        cartTab_bellissimo_pizza_div.classList.add('cartTab_bellissimo_pizza')
        box_block_bellissimo_pizza_div.classList.add('box_block_bellissimo_pizza')
        img_photo.classList.add('img_pizza')
        img_photo.setAttribute('src', cartItem.image)
        img_photo.setAttribute('alt', 'images')
        p_text.classList.add('judge_pizza')
        p_text.innerHTML = cartItem.title
        p_text_type_of_pizza.classList.add('type_of_pizza')
        p_text_type_of_pizza.innerHTML = cartItem.category
        counter_bellissimo_pizza_div.classList.add('counter_bellissimo_pizza')
        minus_bellissimo_pizza_div.classList.add('minus_bellissimo_pizza')
        minus_bellissimo_pizza_div.innerHTML = "-"
        digit_bellissimo_pizza_div.classList.add('digit_bellissimo_pizza')
        /* digit_bellissimo_pizza_div.classList.add('#digit') */
        digit_bellissimo_pizza_div.innerHTML = "1"
        plus_bellissimo_pizza_div.classList.add('plus_bellissimo_pizza')
        plus_bellissimo_pizza_div.innerHTML = "+"
        price_bellissimo_pizza_p.classList.add('price_bellissimo_pizza')
        /* price_bellissimo_pizza_p.classList.add('#price') */
        price_bellissimo_pizza_p.innerHTML = cartItem.price
        real_price_p.classList.add('real_price')
        // real_price_p.innerHTML = "60 000 so'm"
        trashIcon2_div.classList.add('trashIcon2')
        trashIcon2_img.setAttribute('src', './img/trash_gif_icon.gif')
        trashIcon2_img.setAttribute('alt', 'кнопка удаления')
        p_trashIcon2_delete.classList.add('delete')
        p_trashIcon2_delete.innerHTML = "Удалить"

        // append 
        body.append(cartTab_div)
        cartTab_div.append(/* cart_flex_bellissimo_pizza_div, */ cartTab_bellissimo_pizza_div)
        // cart_flex_bellissimo_pizza_div.append(btn_close_items2)
        cartTab_bellissimo_pizza_div.append(box_block_bellissimo_pizza_div)
        box_block_bellissimo_pizza_div.append(img_photo, p_text, p_text_type_of_pizza, counter_bellissimo_pizza_div, price_bellissimo_pizza_p, real_price_p)
        counter_bellissimo_pizza_div.append(minus_bellissimo_pizza_div, digit_bellissimo_pizza_div, plus_bellissimo_pizza_div, trashIcon2_div)
        trashIcon2_div.append(trashIcon2_img, p_trashIcon2_delete)

        let count = 1;
        let price = cartItem.price;

        function plus() {
            count++;
            price *= 2;
            updateDisplay();
        }

        function minus() {
            if (count > 1) {
                count--;
                price /= 2;
                updateDisplay();
            }
        }

        function updateDisplay() {
            document.querySelector(".digit_bellissimo_pizza").innerHTML = count;
            document.querySelector(".price_bellissimo_pizza").innerHTML = price;
        }

        document.querySelector(".minus_bellissimo_pizza").addEventListener("click", minus);
        document.querySelector(".plus_bellissimo_pizza").addEventListener("click", plus);
    }
}

