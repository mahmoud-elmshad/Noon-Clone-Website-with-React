import React from 'react'

const  Mobiles=() => {
  return (
    <div className="container-fluid" style={{backgroundColor:'white',width:'100%',marginTop:'-50px'}}>
    <div className="row my-4">
      <div className="col-md-6 col-lg-3 mb-3 mb-lg-0 ">
        <div className="listgroup ">
          <h6 className="font-weight-bold">CATEGORIES</h6>
          <a href="" className="listgroupitem ">Mobiles New Arrival</a>
          <a href="" className="listgroupitem ">All Mobile Phones</a>
          <a href="" className="listgroupitem">All Tablets</a>
          <a href="" className="listgroupitem">Video Games</a>
          <a href="" className="listgroupitem ">Smart Watches & Accessories</a>
          <a href="" className="listgroupitem ">Wirless Earphones</a>
          <a href="" className="listgroupitem ">Earphones</a>
          <a href="" className="listgroupitem ">Chargers & Cables</a>
          <a href="" className="listgroupitem ">Selfie Stick & Holders</a>
          <a href="" className="listgroupitem ">Covers & ScreenProtectors</a>
          <a href="" className="listgroupitem ">Mobile Gaming & VR Gadget</a>
          <a href="" className="listgroupitem ">Micro SD Cards</a>

        </div>
      </div>
      
      <div className="col-md-6 col-lg-4 mb-3 mb-lg-0 mx-0 px-0">
        <div className="row">
        <h6 className="font-weight-bold my-4">TOP BRANDS</h6>
       <div className="col mx-0 px-0">
        <a href="" className="brand">
              <img src="https://1000logos.net/wp-content/uploads/2017/06/Font-Samsung-Logo.jpg"/>
          </a>
       </div>
       <div className="col mx-0 px-0">
        <a href="" className="brand">
              <img src="https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-svg-png-icon-download-12.png"/>
          </a>
       </div>
       <div className="col mx-0 px-0">
        <a href="" className="brand">
              <img src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo-1998-present.png"/>
          </a>
       </div>
       </div>

       <div className="row">
       <div className="col mx-0 px-0">
        <a href="" className="brand">
              <img src="https://w7.pngwing.com/pngs/156/778/png-transparent-huawei-logo-huawei-p20-%E5%8D%8E%E4%B8%BA-business-smartphone-business-leaf-people-logo.png"/>
          </a>
       </div>
       <div className="col mx-0 px-0">
        <a href="" className="brand">
              <img src="https://www.knowyourmobile.com/wp-content/uploads/2020/09/oppo-logo.jpg"/>
          </a>
       </div>
       <div className="col mx-0 px-0">
        <a href="" className="brand">
              <img src="https://banner2.cleanpng.com/20180612/wqw/kisspng-nokia-6-nokia-8-nokia-x-hmd-global-nokia-logo-5b1ffbbf9a0ef6.730906311528822719631.jpg"/>
          </a>
       </div>
       </div>

       <div className="row">
       <div className="col mx-0 px-0">
        <a href="" className="brand">
              <img src="https://svgarchive.com/wp-content/uploads/huawei-honor.svg"/>
          </a>
       </div>
       <div className="col mx-0 px-0">
        <a href="" className="brand">
              <img src="https://uspto.report/TM/88175451/mark"/>
          </a>
       </div>
       <div className="col mx-0 px-0">
        <a href="" className="brand">
              <img src="data:image/png;base64,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"/>
          </a>
       </div>
       </div>
      </div>       {/* second column */}

      <div className="col-md-6 col-lg-3 mb-3 mb-md-0  mx-0 px-0">
        <div className="list-group list-group-flush">
          <a href="" className="smart">
            <img src="https://img.etimg.com/thumb/msid-90799673,width-650,imgsize-26636,,resizemode-4,quality-100/iphone-14.jpg"/>
          </a>

        </div>
      </div>

      <div className="col-md-4 col-lg-2 mb-3 mb-md-0  mx-0 px-0">
        <div className="list-group list-group-flush">
          <a href="" className="games">
            <img src="https://www.gizchina.com/wp-content/uploads/images/2021/02/iPhone-13-2-1.jpg"/>
          </a>

        </div>
      </div>

    </div>
  </div>
  )
}

export default Mobiles;
