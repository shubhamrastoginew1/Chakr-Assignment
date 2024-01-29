import React from 'react'
import '../css/customers.css';
import avatar1 from '../assets/1.png'
import avatar2 from '../assets/2.png'
import avatar3 from '../assets/3.png'
import avatar4 from '../assets/4.png'

const Customers = () => {
  return (
    <div className='customers-container'>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <p style={{ color: '#131313', fontSize: '1.25rem', fontWeight: '600' }}>
          Customers
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ color: '#454545', fontSize: '0.875rem', fontWeight: '400' }}>
            Sort by &nbsp;
          </p>

          <p style={{ color: '#454545', fontSize: '0.875rem', fontWeight: '600' }}>
            Newest &nbsp;
          </p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path d="M3.5 5.86163L7 9.36163L10.5 5.86163" stroke="#7D7D7D" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* end of first header */}

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '0.6rem', borderRadius: '1rem' }}>
        <div style={{ marginRight: '0.6rem' }}>
          <img src={avatar1} alt="" />
        </div>
        <div>
          <p style={{ color: '#131313', fontSize: '0.875rem', fontWeight: '500' }}>
            Chris Friedkly
          </p>
          <p style={{ color: '#454545', fontSize: '0.75rem', fontWeight: '400' }}>
            Supermarket Villanova
          </p>
        </div>
      </div>


      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: '#FFF7E8', padding: '0.6rem', borderRadius: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div style={{ marginRight: '0.6rem' }}>
            <img src={avatar2} alt="" />
          </div>
          <div>
            <p style={{ color: '#131313', fontSize: '0.875rem', fontWeight: '500' }}>
              Maggie Johnson
            </p>
            <p style={{ color: '#454545', fontSize: '0.75rem', fontWeight: '400' }}>
              Oasis Organic Inc.
            </p>
          </div>
        </div>
        <div style={{ width: '25%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 16 17" fill="none">
            <path d="M2 13.945L2.86667 11.345C1.31733 9.05363 1.916 6.09696 4.26667 4.42896C6.61733 2.76163 9.99333 2.8983 12.1633 4.74896C14.3333 6.6003 14.6267 9.59297 12.8493 11.7496C11.072 13.9063 7.77267 14.5596 5.13333 13.2783L2 13.945Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 16 17" fill="none">
            <path d="M7.99997 12.445L3.8853 14.6083L4.6713 10.0263L1.33797 6.78163L5.93797 6.11496L7.9953 1.9463L10.0526 6.11496L14.6526 6.78163L11.3193 10.0263L12.1053 14.6083L7.99997 12.445Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 16 17" fill="none">
            <path d="M9.00001 4.94497L11.6667 7.61163M2.66667 13.945H5.33334L12.3333 6.94496C12.5084 6.76987 12.6473 6.562 12.7421 6.33323C12.8369 6.10445 12.8856 5.85925 12.8856 5.61163C12.8856 5.36401 12.8369 5.11881 12.7421 4.89004C12.6473 4.66126 12.5084 4.45339 12.3333 4.2783C12.1582 4.1032 11.9504 3.96431 11.7216 3.86955C11.4928 3.77479 11.2476 3.72601 11 3.72601C10.7524 3.72601 10.5072 3.77479 10.2784 3.86955C10.0496 3.96431 9.84177 4.1032 9.66667 4.2783L2.66667 11.2783V13.945Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 16 17" fill="none">
            <path d="M7.33334 8.61163C7.33334 8.78844 7.40358 8.95801 7.52861 9.08304C7.65363 9.20806 7.8232 9.2783 8.00001 9.2783C8.17682 9.2783 8.34639 9.20806 8.47141 9.08304C8.59644 8.95801 8.66668 8.78844 8.66668 8.61163C8.66668 8.43482 8.59644 8.26525 8.47141 8.14023C8.34639 8.0152 8.17682 7.94496 8.00001 7.94496C7.8232 7.94496 7.65363 8.0152 7.52861 8.14023C7.40358 8.26525 7.33334 8.43482 7.33334 8.61163Z" fill="#131313" />
            <path d="M7.33334 13.2783C7.33334 13.4551 7.40358 13.6247 7.52861 13.7497C7.65363 13.8747 7.8232 13.945 8.00001 13.945C8.17682 13.945 8.34639 13.8747 8.47141 13.7497C8.59644 13.6247 8.66668 13.4551 8.66668 13.2783C8.66668 13.1015 8.59644 12.9319 8.47141 12.8069C8.34639 12.6819 8.17682 12.6116 8.00001 12.6116C7.8232 12.6116 7.65363 12.6819 7.52861 12.8069C7.40358 12.9319 7.33334 13.1015 7.33334 13.2783Z" fill="#131313" />
            <path d="M7.33334 3.94496C7.33334 4.12178 7.40358 4.29134 7.52861 4.41637C7.65363 4.54139 7.8232 4.61163 8.00001 4.61163C8.17682 4.61163 8.34639 4.54139 8.47141 4.41637C8.59644 4.29134 8.66668 4.12178 8.66668 3.94496C8.66668 3.76815 8.59644 3.59858 8.47141 3.47356C8.34639 3.34854 8.17682 3.2783 8.00001 3.2783C7.8232 3.2783 7.65363 3.34854 7.52861 3.47356C7.40358 3.59858 7.33334 3.76815 7.33334 3.94496Z" fill="#131313" />
            <path d="M7.33334 8.61163C7.33334 8.78844 7.40358 8.95801 7.52861 9.08304C7.65363 9.20806 7.8232 9.2783 8.00001 9.2783C8.17682 9.2783 8.34639 9.20806 8.47141 9.08304C8.59644 8.95801 8.66668 8.78844 8.66668 8.61163C8.66668 8.43482 8.59644 8.26525 8.47141 8.14023C8.34639 8.0152 8.17682 7.94496 8.00001 7.94496C7.8232 7.94496 7.65363 8.0152 7.52861 8.14023C7.40358 8.26525 7.33334 8.43482 7.33334 8.61163Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.33334 13.2783C7.33334 13.4551 7.40358 13.6247 7.52861 13.7497C7.65363 13.8747 7.8232 13.945 8.00001 13.945C8.17682 13.945 8.34639 13.8747 8.47141 13.7497C8.59644 13.6247 8.66668 13.4551 8.66668 13.2783C8.66668 13.1015 8.59644 12.9319 8.47141 12.8069C8.34639 12.6819 8.17682 12.6116 8.00001 12.6116C7.8232 12.6116 7.65363 12.6819 7.52861 12.8069C7.40358 12.9319 7.33334 13.1015 7.33334 13.2783Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.33334 3.94496C7.33334 4.12178 7.40358 4.29134 7.52861 4.41637C7.65363 4.54139 7.8232 4.61163 8.00001 4.61163C8.17682 4.61163 8.34639 4.54139 8.47141 4.41637C8.59644 4.29134 8.66668 4.12178 8.66668 3.94496C8.66668 3.76815 8.59644 3.59858 8.47141 3.47356C8.34639 3.34854 8.17682 3.2783 8.00001 3.2783C7.8232 3.2783 7.65363 3.34854 7.52861 3.47356C7.40358 3.59858 7.33334 3.76815 7.33334 3.94496Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>


      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '0.6rem', borderRadius: '1rem' }}>
        <div style={{ marginRight: '0.6rem' }}>
          <img src={avatar3} alt="" />
        </div>
        <div>
          <p style={{ color: '#131313', fontSize: '0.875rem', fontWeight: '500' }}>
            Gael Harry
          </p>
          <p style={{ color: '#454545', fontSize: '0.75rem', fontWeight: '400' }}>
            New York Finest Fruits
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '0.6rem', borderRadius: '1rem' }}>
        <div style={{ marginRight: '0.6rem' }}>
          <img src={avatar4} alt="" />
        </div>
        <div>
          <p style={{ color: '#131313', fontSize: '0.875rem', fontWeight: '500' }}>
            Jenna Sullivan
          </p>
          <p style={{ color: '#454545', fontSize: '0.75rem', fontWeight: '400' }}>
            Walmart
          </p>
        </div>
      </div>




    </div>
  )
}

export default Customers