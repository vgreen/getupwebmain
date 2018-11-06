


//Main Page Content Data 

let textswap = function(i){// swapping text in content
	let pages = [
		{
			title:'Создаем поток клиентов в ваш бизнес',
			text:'Узнать сколько клиентов теряет ваш бизнес каждый день',
			body:'',
			home_button: 'GetUpWeb'
		},
		{
			title:'Landing Page, интернет-магазин или корпоративный сайт для Вашего бизнеса',
			text:'Вы сможете получать адекватных и платежеспособных клиентов из интернета. Оптимизировать и сократить текущие рекламные расходы и при этом увеличить поток заявок покупателей. Узнайте стоимость и сроки разработки сайта для Вашей ниши – получите коммерческое предложение.',
			body:'<table>'+
					'<tr>'+
						'<td><a href="123"><img src="icons/design.png"></a></td>'+
						'<td><a href="123"><img src="icons/programming.png"></a></td>'+
						'<td><a href="123"><img src="icons/support.png"></a></td>'+
					'</tr>'+
					'<tr>'+
						'<td><a href="123">Дизайн</a></td>'+
						'<td><a href="123">Программирование</a></td>'+
						'<td><a href="123">Поддержка</a></td>'+
					'</tr>'+
				'</table>',
			home_button: 'Веб-разработка'
		},
		{
			title:'Увеличьте поток заказов с сайта на 20-30% через Яндекс Директ и Google Adwords <h3>без увеличения Вашего рекламного бюджета</h3>',
			text:'Сделаем анализ текущих рекламных кампаний и подготовим план работ по улучшению показателей. После этого создадим новый аккаунт с учётом всех правок. Вам останется пополнить рекламный бюджет и сравнить показатели "было/стало"',
			body:'<table>'+
					'<tr>'+
						'<td><a href="123"><img src="icons/target.png"></a></td>'+
						'<td><a href="123"><img src="icons/funnel.png"></a></td>'+
						'<td><a href="123"><img src="icons/direct.png"></a></td>'+
					'</tr>'+
					'<tr>'+
						'<td><a href="123">Таргет</a></td>'+
						'<td><a href="123">Автоворонка</a></td>'+
						'<td><a href="123">Яндекс-Директ</a></td>'+
					'</tr>'+
				'</table>',
			home_button: 'Маркетинг'	
		}
	]
	

	function addContent(){
		block.classList.add('active')
	}

	block.classList.remove('active')
	title.innerHTML = pages[i].title
	text.innerHTML = pages[i].text
	tablebody.innerHTML = pages[i].body
	home_name.innerHTML = pages[i].home_button
	setTimeout(addContent,1)
}




// Element in animation
//---------------------------------------------
let numbers = document.getElementsByClassName("number") // bottom number menu
let state = "idle" // main state of page ( current directory )
let block = document.getElementById("content-text") // block of content text 
let title = document.getElementById('title') //head of content
let text = document.getElementById('text') // text content
let tablebody = document.getElementById('body') //table for icons
let home_name  = document.getElementById('home-button')//bottom name of directory
let wrp = document.getElementById('main_wrp')
let mark = document.getElementById('marketing')
let dev = document.getElementById('develp')
let false_back = document.getElementById('false_back')
let order = document.getElementById('to_order')
let form = document.getElementById('form')
let close = document.getElementById('form-close')
let nextt = document.getElementById('form-more_about')

let left = document.getElementById("left-arrow")
let right = document.getElementById("right-arrow")
let lines = document.getElementsByClassName("line")
//----------------------------------------------------
let target // target directory (redirect in form)

// form close function
close.onclick = _=>{
	form.classList.remove('active')

	wrp.style.filter =  ''
	false_back.classList.remove('active')
	setTimeout(_ => {form.style.display = ''},700)
}
//form open function
order.onclick = _ => {
	form.style.display = 'flex'
	setTimeout(_ => {form.classList.add('active')}, 1)
	wrp.style.filter =  'saturate(10%)'
	false_back.classList.add('active')
	if(state == 'idle'){
		nextt.getElementsByTagName('p')[0].innerHTML = 'веб-разработка'
		target = dev
	}
	if(state == 'it'){
		nextt.getElementsByTagName('p')[0].innerHTML = 'маркетинг'
		target = mark
	}
	if(state == 'marketing'){
		nextt.getElementsByTagName('p')[0].innerHTML = 'узнать больше'
		target = mark
	}
}

//close form and redirect to target directory

function reroll(target){
	target.onclick()
	close.onclick()
}

//redirect from form to another directory
nextt.onclick = _=>{
	reroll(target)
}


//redirect to Development directory(click on incline block)
dev.onclick = _ => {

		if(state != "it")
		{	
			mark.classList = ''
			dev.classList = ''
			mark.classList.add('dev')
			dev.classList.add('dev')
			textswap(1);
			state = "it"
			numbers[1].onclick()
		}
		else
		{
			mark.classList = ''
			dev.classList = ''
			
			textswap(0);
			state = "idle"
			numbers[0].onclick()
		}	
}
//redirect to Marketing directory(click on incline block)
mark.onclick = _ => {
		
		if(state != "marketing")
		{	
			mark.classList = ''
			dev.classList = ''
			mark.classList.add('mark')
			dev.classList.add('mark')
		
			textswap(2);
			state = "marketing"
			numbers[2].onclick()
		}
		else
		{
				
				mark.classList = ''
				dev.classList = ''
			
				textswap(0);
				state = "idle"
				numbers[0].onclick()
		}
	}

document.getElementById('submit').onclick = _ =>{
    let re = /^\d[\d\(\)\ -]{4,18}\d$/;
    let myPhone = document.getElementById('phone').value
    let output = re.test(myPhone) ? 'Номер телефона введен правильно!' : 'Номер телефона введен неправильно!'
  	console.log(output)
}  

window.onresize = _ =>{
	if(window.innerWidth <= 1024) 
		{
			close.innerHTML = '<img src="assets/close-button.svg">'
		}
		else
		{
			close.innerHTML = '<img src="assets/close-button-white.png">'
		}
	
}

window.onload = _ => {
	if(window.innerWidth <= 1024) close.innerHTML = '<img src="assets/close-button.svg">'

	block.classList.add("active");

	

	let current_n = 0//current number

	//numbers buttons 
	numbers[0].onclick = _ => {
		current_n = 0
		numbers[0].classList.add("active")
		numbers[1].classList.remove("active")
		numbers[2].classList.remove("active")

		lines[0].classList.remove("medium")
		lines[1].classList.remove("long")
		lines[1].classList.remove("medium")
		lines[0].classList.add("long")
		if(state == "it")document.getElementById('develp').click()
		
		if(state == "marketing")document.getElementById('marketing').click()		
	}

	numbers[1].onclick = _ => {
		current_n = 1
		numbers[0].classList.remove("active")
		numbers[1].classList.add("active")
		numbers[2].classList.remove("active")

		lines[0].classList.remove("long")
		lines[1].classList.remove("long")
		lines[0].classList.add("medium")
		lines[1].classList.add("medium")

		if(state != 'it')document.getElementById('develp').click()
		

	}

	numbers[2].onclick = _ => {
		current_n = 2
		numbers[0].classList.remove("active")
		numbers[1].classList.remove("active")
		numbers[2].classList.add("active")

		lines[0].classList.remove("long")
		lines[0].classList.remove("medium")
		lines[1].classList.remove("medium")
		lines[1].classList.add("long")
		
		if(state != 'marketing')document.getElementById('marketing').click()
	
		
	}
	//arrow buttons
	left.onclick = _=> {
		let j = current_n
		if(j == 0){
			j = 2
		} 
		else{
			j--
		}
		numbers[j].onclick()
	}
	right.onclick = _=> {
		let j = current_n
		if(j == 2){
			j = 0
		} 
		else{
			j++
		}
		numbers[j].onclick()
	}
}