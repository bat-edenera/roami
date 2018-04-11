import $ from 'jquery';

function Modal(){
	Object.assign(this.$dom,{
		_over:$('.j-modalOver'),
	});
	this.options = Object.assign({
		depOver:true,
		animation:true,
		overClickable:false,
	},this.options||{});
	// this.fname = this.options.animation?['bounceIn','bounceOut']:['show','hide'];
	this.fname = ['fadeIn', 'fadeOut'];
	this.close = this.close.bind(this);
	this.open = this.open.bind(this);
	this.$dom.close!=undefined&&this.$dom.close.on('click',this.close);
}
Modal.prototype = {
	constructor: Modal,
	init:function(){},
	remove:function(){},
	open:function(payload){
		this.init(payload);
		this.options.depOver&&this.$dom._over.show();
		this.options.overClickable&&this.$dom._over.on('click',this.close);
		this.$dom.box[this.fname[0]]();
	},
	close:function(){
		this.options.depOver&&this.$dom._over.hide();
		this.options.overClickable&&this.$dom._over.unbind('click',this.close)
		this.$dom.box[this.fname[1]]();
		this.remove();
	}
}

export function Confirm() {
	this.$dom = {
		box: $('.j-confirmModal'),
		close: $('.j-confirmModal .close'),
		content: $('.j-confirmModal .info'),
		sure:$('.j-confirmModal .sure'),
	}
	Modal.call(this);
	this.sure = function(){};
	this.$dom.sure.on('click',this._sure.bind(this));
}
Confirm.prototype = Object.create(Modal.prototype);
Object.assign(Confirm.prototype, {
	init: function (payload) {
		this.$dom.content.text(payload.text);
		typeof payload.sure == "function" && (this.sure = payload.sure);
	},
	_sure:function(){
		this.close();
		this.sure();
	}
})


export function Export() {
	this.options = {
		overClickable:true
	}
	this.$dom = {
		box: $('.j-exportModal'),
		title: $('.j-exportModal .title'),
		sure: $('.j-exportModal .sure'),
	}
	Modal.call(this);
	this.sure = function () { };
	this.$dom.sure.on('click', this._sure.bind(this));
}
Export.prototype = Object.create(Modal.prototype);
Object.assign(Export.prototype, {
	init: function (payload) {
		this.$dom.title.text(payload.title);
		this.sure = payload.sure;
	},
	_sure: function () {
		this.close();
		this.sure();
	}
})
