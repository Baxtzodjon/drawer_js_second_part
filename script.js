let cont = document.querySelector('.container')
let btn_five = document.querySelector('[data-five]')
let btn_all = document.querySelector('[data-all]')
let total_view = document.querySelector('#total')
let cartTab_div = document.createElement('div')
let open_Cart = document.querySelector('[data-cart]')
let closeCart = document.querySelector('.close_times2')
let body = document.querySelector('body')

let saveds = []

btn_five.onclick = () => {
    reload(arr.slice(0, 5))
}

btn_all.onclick = () => {
    reload(arr)
}

reload(arr)
reload_cart(saveds)

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

        img.src = item.image
        img.alt = item.title

        h2.innerHTML = `${item.category} (${item.rating.count})`
        p.innerHTML = item.description.slice(0, 100)
        b.innerHTML = " read more..."
        button.innerHTML = "Save"

        if (saveds.includes(item.id)) {
            button.innerHTML = "Добавлен в корзину"
            button.classList.add('active-btn')
        }

        // append
        div_item.append(img, descrip_div)
        descrip_div.append(h2, p, button)
        p.append(b)
        cont.append(div_item)

        // functions
        button.onclick = () => {
            if (saveds.includes(item.id)) {
                //deleteBtn
                let idx = saveds.indexOf(item.id)
                saveds.splice(idx, 1)
                button.classList.remove('active-btn')
                button.innerHTML = 'Save'
            } else {
                button.classList.add('active-btn')
                button.innerHTML = 'Добавлен в корзину'
                saveds.push(item.id)
            }
            total_view.innerHTML = saveds.length
            reload_cart(saveds)
        }
        b.onclick = () => {
            if (b.innerHTML === "close") {
                p.innerHTML = item.description.slice(0, 100)
                b.innerHTML = "read more..."
            } else {
                p.innerHTML = item.description
                b.innerHTML = "close"
            }
            p.append(b)
        }
    }
}

open_Cart.onclick = () => {
    body.classList.toggle('showCart')
}

closeCart.onclick = () => {
    body.classList.toggle('showCart')
}


// create 
let counting_price = document.createElement('div')
let total_price = document.createElement('p')
let cost = document.createElement('p')

// styling
counting_price.classList.add('couting_number')
total_price.classList.add('total_price')
cost.classList.add('cost')

total_price.innerHTML = "Итого:"
cost.innerHTML = "0 сум"



function reload_cart(ids) {
    cartTab_div.innerHTML = ""

    let total = 0

    for (let id of ids) {
        let cartItem = arr.find(el => el.id === id)
        total = +(total + cartItem.price).toFixed(2)

        // create
        let cart_flex_bellissimo_pizza_div = document.createElement('div')
        let btn_close_items2 = document.createElement('button')
        let cartTab_bellissimo_pizza_div = document.createElement('div')
        let box_block_bellissimo_pizza_div = document.createElement('div')
        let img_photo = document.createElement('img')
        let p_text = document.createElement('p')
        let p_text_type_of_pizza = document.createElement('p')
        let counter_bellissimo_pizza_div = document.createElement('div')
        let minus = document.createElement('div')
        let count = document.createElement('div')
        let plus = document.createElement('div')
        let price = document.createElement('p')
        let real_price_p = document.createElement('p')
        let trashIcon2_div = document.createElement('div')
        let trashIcon2_img = document.createElement('img')
        let deleteBtn = document.createElement('delete')

        // styling
        cartTab_div.classList.add('cartTab')
        cart_flex_bellissimo_pizza_div.classList.add('cart_flex_bellissimo_pizza')
        btn_close_items2.classList.add('close_times2')
        cartTab_bellissimo_pizza_div.classList.add('cartTab_bellissimo_pizza')
        box_block_bellissimo_pizza_div.classList.add('box_block_bellissimo_pizza')
        img_photo.classList.add('img_pizza')
        p_text.classList.add('judge_pizza')
        p_text_type_of_pizza.classList.add('type_of_pizza')
        counter_bellissimo_pizza_div.classList.add('counter_bellissimo_pizza')
        minus.classList.add('minus_bellissimo_pizza')
        count.classList.add('digit_bellissimo_pizza')
        plus.classList.add('plus_bellissimo_pizza')
        price.classList.add('price_bellissimo_pizza')
        real_price_p.classList.add('real_price')
        trashIcon2_div.classList.add('trashIcon2')
        deleteBtn.classList.add('delete')

        img_photo.setAttribute('src', cartItem.image)
        img_photo.setAttribute('alt', 'images')
        trashIcon2_img.setAttribute('src', './img/trash_gif_icon.gif')
        trashIcon2_img.setAttribute('alt', 'кнопка удаления')
        count.id = 'digit' // добавлять id

        btn_close_items2.innerHTML = "X"
        p_text.innerHTML = cartItem.title
        p_text_type_of_pizza.innerHTML = cartItem.category
        minus.innerHTML = "-"
        count.innerHTML = "1"
        plus.innerHTML = "+"
        price.innerHTML = cartItem.price
        deleteBtn.innerHTML = "Удалить"
        // digit.classList.add('#digit')
        // digit.setAttribute('id', 213213) // создать id
        // digit.setAttribute('id', 'digit') // добавлять id второй способ
        /* price.classList.add('#price') */
        // real_price_p.innerHTML = "60 000 so'm"

        // append 
        body.append(cartTab_div)
        cartTab_div.append(/* cart_flex_bellissimo_pizza_div,  */cartTab_bellissimo_pizza_div, counting_price)
        counting_price.append(total_price, cost)
        /* cart_flex_bellissimo_pizza_div.append(btn_close_items2) */
        cartTab_bellissimo_pizza_div.append(box_block_bellissimo_pizza_div)
        box_block_bellissimo_pizza_div.append(img_photo, p_text, p_text_type_of_pizza, counter_bellissimo_pizza_div, price, real_price_p)
        counter_bellissimo_pizza_div.append(minus, count, plus, trashIcon2_div)
        trashIcon2_div.append(trashIcon2_img, deleteBtn)

        // functions
        plus.onclick = () => {
            if (count.innerHTML < cartItem.rating.count) {
                count.innerHTML++
                price.innerHTML = (cartItem.price * count.innerHTML).toFixed(2)
            }
            total = +(total + cartItem.price).toFixed(2)

            console.log({ total });
        }
        minus.onclick = () => {
            if (count.innerHTML > 0) {
                count.innerHTML--
                price.innerHTML = (cartItem.price * count.innerHTML).toFixed(2)
                total = +(total - cartItem.price).toFixed(2)
            }
            console.log(total);
        }
        deleteBtn.onclick = () => {
            let idx = saveds.indexOf(cartItem.id)
            saveds.splice(idx, 1)
            cartTab_bellissimo_pizza_div.remove()
            reload(arr)
        }
    }
}