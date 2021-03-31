import { Component, createRef, useEffect, useRef, useState } from 'react'

export default function () {
  return (
    <div className='h5-body'>
      <div className='page grid js_show'>
        <div className='page__hd'>
            <h1 className='page__title'>Grid</h1>
            <p className='page__desc'>九宫格</p>
        </div>
        <div className='weui-grids'>
            <a href='javascript:' className='weui-grid'>
                <div className='weui-grid__icon'>
                    <img src={require('../../images/icon_tabbar.png')} alt='' />
                </div>
                <p className='weui-grid__label'>Grid</p>
            </a>
            <a href='javascript:' className='weui-grid'>
                <div className='weui-grid__icon'>
                    <img src={require('../../images/icon_tabbar.png')} alt='' />
                </div>
                <p className='weui-grid__label'>Grid</p>
            </a>
            <a href='javascript:' className='weui-grid'>
                <div className='weui-grid__icon'>
                    <img src={require('../../images/icon_tabbar.png')} alt='' />
                </div>
                <p className='weui-grid__label'>Grid</p>
            </a>
            <a href='javascript:' className='weui-grid'>
                <div className='weui-grid__icon'>
                    <img src={require('../../images/icon_tabbar.png')} alt='' />
                </div>
                <p className='weui-grid__label'>Grid</p>
            </a>
            <a href='javascript:' className='weui-grid'>
                <div className='weui-grid__icon'>
                    <img src={require('../../images/icon_tabbar.png')} alt='' />
                </div>
                <p className='weui-grid__label'>Grid</p>
            </a>
            <a href='javascript:' className='weui-grid'>
                <div className='weui-grid__icon'>
                    <img src={require('../../images/icon_tabbar.png')} alt='' />
                </div>
                <p className='weui-grid__label'>Grid</p>
            </a>
            <a href='javascript:' className='weui-grid'>
                <div className='weui-grid__icon'>
                    <img src={require('../../images/icon_tabbar.png')} alt='' />
                </div>
                <p className='weui-grid__label'>Grid</p>
            </a>
            <a href='javascript:' className='weui-grid'>
                <div className='weui-grid__icon'>
                    <img src={require('../../images/icon_tabbar.png')} alt='' />
                </div>
                <p className='weui-grid__label'>Grid</p>
            </a>
            <a href='javascript:' className='weui-grid'>
                <div className='weui-grid__icon'>
                    <img src={require('../../images/icon_tabbar.png')} alt='' />
                </div>
                <p className='weui-grid__label'>Grid</p>
            </a>
        </div>
      </div>
    </div>
  )
}
