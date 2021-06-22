import React, { Component } from 'react';
import { ADDING, DELETE } from '../actionTypes/actionTypes';

export const addToProduct = (payload)=> ({
    type: ADDING,
    payload
})

export const deleteProduct = (payload)=>({
    type:DELETE,
    payload
})