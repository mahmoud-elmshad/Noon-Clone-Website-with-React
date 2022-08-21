import React from 'react'

const Elec = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: 'white', width: '100%', marginTop: '-50px' }}>
      <div className="row my-4">
        <div className="col-2">
          <div className="listgroup ">
            <h6 className="font-weight-bold">CATEGORIES</h6>
            <a href="" className="listgroupitem ">Tv,Satelleites& Accessories</a>
            <a href="" className="listgroupitem ">Laptops &Accessories</a>
            <a href="" className="listgroupitem">Audio & Home Entertainment</a>
            <a href="" className="listgroupitem">Video Games</a>
            <a href="" className="listgroupitem ">Camera & Accessories</a>
            <a href="" className="listgroupitem ">Printers & Accesories</a>
            <a href="" className="listgroupitem ">Networking Products</a>
            <a href="" className="listgroupitem ">Data Storage</a>
            <a href="" className="listgroupitem ">Computer Components</a>
            <a href="" className="listgroupitem ">Computer Accessories</a>
          </div>
        </div>
        <div className="col-4">
          <h6 className="font-weight-bold my-4">TOP BRANDS</h6>
          <div className="">

            <div className='d-flex flex-wrap'>
              <div className='m-1' style={{ border: '1px solid lightgrey', width:'47%' }}>
                <img style={{width:'100%'}} src='https://z.nooncdn.com/rn/brands_v1/maybelline.png' />
              </div>
              <div className='m-1' style={{ border: '1px solid lightgrey', width:'47%'  }}>
                <img style={{width:'100%'}} src='https://z.nooncdn.com/rn/brands_v1/maybelline.png' />
              </div>
              <div className='m-1' style={{ border: '1px solid lightgrey', width:'47%'  }}>
                <img style={{width:'100%'}} src='https://z.nooncdn.com/rn/brands_v1/maybelline.png' />
              </div>
              <div className='m-1' style={{ border: '1px solid lightgrey', width:'47%'  }}>
                <img style={{width:'100%'}} src='https://z.nooncdn.com/rn/brands_v1/maybelline.png' />
              </div>

            </div>
          </div>

        </div>       {/* second column */}
        <div className='d-flex justify-content-around col-6' style={{marginTop:'4.4rem'}}>
          <div className="row">
            <div className="col-7">
              
              <img src='https://a.nooncdn.com/cms/pages/20220522/f98b0c088a83d0e3925769b0539dccfd/en_drop-01.png' />              

            </div>
            <div className="col-5">
              <img style={{marginLeft:'0.5rem'}} src='https://a.nooncdn.com/cms/pages/20220522/f98b0c088a83d0e3925769b0539dccfd/en_drop-02.png' />
          </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Elec;
