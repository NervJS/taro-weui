import { Component, createRef, useEffect, useRef, useState } from 'react'

export default function () {
  return (
    <div className='h5-body'>
      <div className='page button js_show'>
          <div className='page__hd'>
              <h1 className='page__title'>Button</h1>
              <p className='page__desc'>按钮</p>
          </div>
          <div className='page__bd'>

              <div className='button-sp-area'>
              <a href='javascript:' className='weui-btn weui-btn_primary'>页面主操作</a>
              <a href='javascript:' className='weui-btn weui-btn_primary weui-btn_loading'><span className='weui-primary-loading weui-primary-loading_transparent'><i className='weui-primary-loading__dot'></i></span>页面主操作</a>
              <a href='javascript:' className='weui-btn weui-btn_disabled weui-btn_primary'>页面主操作</a>
              <a href='javascript:' className='weui-btn weui-btn_default'>页面次要操作</a>
          <a href='javascript:' className='weui-btn weui-btn_default weui-btn_loading'><span className='weui-primary-loading'><i className='weui-primary-loading__dot'></i></span>页面次操作</a>
              <a href='javascript:' className='weui-btn weui-btn_disabled weui-btn_default'>页面次要操作</a>
              <a href='javascript:' className='weui-btn weui-btn_warn'>警告类操作</a>
          <a href='javascript:' className='weui-btn weui-btn_warn weui-btn_loading'><span className='weui-primary-loading'><i className='weui-primary-loading__dot'></i></span>警告类操作</a>
              <a href='javascript:' className='weui-btn weui-btn_disabled weui-btn_warn'>警告类操作</a>
              </div>


              <div className='button-sp-area cell'>
                <a href='javascript:' className='weui-btn_cell weui-btn_cell-default'>普通行按钮</a>
                <a href='javascript:' className='weui-btn_cell weui-btn_cell-primary'>强调行按钮</a>
                <a href='javascript:' className='weui-btn_cell weui-btn_cell-primary'>
                  <img className='weui-btn_cell__icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=' />
                  强调行按钮
                </a>
                <a href='javascript:' className='weui-btn_cell weui-btn_cell-warn'>警告行按钮</a>
              </div>

              <div className='button-sp-area'>
                  <a href='javascript:' className='weui-btn weui-btn_mini weui-btn_primary'>按钮</a>
                  <a href='javascript:' className='weui-btn weui-btn_mini weui-btn_default'>按钮</a>
                  <a href='javascript:' className='weui-btn weui-btn_mini weui-btn_warn'>按钮</a>
              </div>
          </div>
      </div>
    </div>
  )
}
