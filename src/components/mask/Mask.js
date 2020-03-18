//import React, { useState, useEffect, Component } from 'react'

export function MaskItem(valor){	
	let mascara = valor[0].toLowerCase();
	let value = valor[1];
	let valueNew = '';
	if(mascara === 'telefone'){
		if(value.length <= 9){
			valueNew = value.replace(/\D/g,"").replace(/^(\d)/,"($1").replace(/(.{3})(\d)/,"$1)$2").replace(/(.{4})(\d)/,"$1 $2");
		} else if(value.length > 9 && value.length <= 14){
			valueNew = value.replace('-', '').replace(/(\d{4})(\d)/,"$1-$2");
		} else if(value.length > 14){
			valueNew = value.replace('-', '').replace(/(\d{5})(\d)/,"$1-$2");
		}                
	} else if (mascara === 'data') {
		valueNew = value.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1/$2").replace(/(\d{2})(\d)/,"$1/$2");
	} else if (mascara === 'valor') {
		valueNew = value.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2");
	}
	return valueNew;
}