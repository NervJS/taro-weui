import { Component, createRef, useEffect, useRef, useState } from 'react'

export default function () {
  return (
    <body>
      <div className='page msg_custom_area_preview js_show'>
        <div className='weui-msg'>
            <div className='weui-msg__icon-area'><i className='weui-icon-success weui-icon_msg'></i></div>
            <div className='weui-msg__text-area'>
                <h2 className='weui-msg__title'>操作成功</h2>
                <p className='weui-msg__desc'>内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href='javascript:'>文字链接</a></p>
                <div className='weui-msg__custom-area'>
                  <ul className='weui-form-preview__list'>
                    <li className='weui-form-preview__item'><label className='weui-form-preview__label'>姓名</label><p className='weui-form-preview__value'>张三</p></li>
                    <li className='weui-form-preview__item'><label className='weui-form-preview__label'>微信号</label><p className='weui-form-preview__value'>zhangsan</p></li>
                  </ul>
                </div>
            </div>
            <div className='weui-msg__opr-area'>
                <p className='weui-btn-area'>
                    <a href='javascript:history.back();' className='weui-btn weui-btn_primary'>推荐操作</a>
                </p>
            </div>
        </div>
      </div>
    </body>
  )
}
