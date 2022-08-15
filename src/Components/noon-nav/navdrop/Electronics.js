import React from 'react'

const Elec = () => {
  return (
    <div class="container-fluid" style={{ backgroundColor: 'white', width: '100%', marginTop: '-50px' }}>
      <div class="row my-4">
        <div class="col-2">
          <div class="listgroup ">
            <h6 className="font-weight-bold">CATEGORIES</h6>
            <a href="" class="listgroupitem ">Tv,Satelleites& Accessories</a>
            <a href="" class="listgroupitem ">Laptops &Accessories</a>
            <a href="" class="listgroupitem">Audio & Home Entertainment</a>
            <a href="" class="listgroupitem">Video Games</a>
            <a href="" class="listgroupitem ">Camera & Accessories</a>
            <a href="" class="listgroupitem ">Printers & Accesories</a>
            <a href="" class="listgroupitem ">Networking Products</a>
            <a href="" class="listgroupitem ">Data Storage</a>
            <a href="" class="listgroupitem ">Computer Components</a>
            <a href="" class="listgroupitem ">Computer Accessories</a>
          </div>
        </div>
        <div class="col-4">
          <h6 className="font-weight-bold my-4">TOP BRANDS</h6>
          <div class="">

            <div className='d-flex flex-wrap'>
              <div className='m-1' style={{ border: '1px solid lightgrey' }}>
                <img src='https://z.nooncdn.com/rn/brands_v1/maybelline.png' />
              </div>
              <div className='m-1' style={{ border: '1px solid lightgrey' }}>
                <img src='https://z.nooncdn.com/rn/brands_v1/maybelline.png' />
              </div>
              <div className='m-1' style={{ border: '1px solid lightgrey' }}>
                <img src='https://z.nooncdn.com/rn/brands_v1/maybelline.png' />
              </div>
              <div className='m-1' style={{ border: '1px solid lightgrey' }}>
                <img src='https://z.nooncdn.com/rn/brands_v1/maybelline.png' />
              </div>

            </div>
          </div>

        </div>       {/* second column */}
        <div className='d-flex justify-content-around col-6' style={{marginTop:'4.4rem'}}>
          <div class="row">
            <div class="col-7">
              
              <img src='https://a.nooncdn.com/cms/pages/20220522/f98b0c088a83d0e3925769b0539dccfd/en_drop-01.png' />              

            </div>
            <div class="col-5">
              <img style={{marginLeft:'0.5rem'}} src='https://a.nooncdn.com/cms/pages/20220522/f98b0c088a83d0e3925769b0539dccfd/en_drop-02.png' />
          </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Elec;
