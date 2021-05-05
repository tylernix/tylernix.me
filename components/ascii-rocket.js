import Container from './container'
import { GITHUB_URL } from '../lib/constants'
import React, {useState} from "react"

export default function AsciiRocket() {
  const [display, setDisplay] = useState("hidden");
  const showRocket = e => {
    e.preventDefault();
    setDisplay("block fixed text-center bottom-0 right-0");
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    setTimeout(function() {
      setDisplay("hidden");
    }, 1500)
  };

  const hideRocket = e => {
    e.preventDefault();
    setDisplay("hidden");
  };
  return (
    <div className="relative">
        <svg className="absolute bottom-2 right-2 w-8 h-8" onMouseOver={e => showRocket(e)} id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path d="M152,224a8.00008,8.00008,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8.00008,8.00008,0,0,1,152,224ZM128,108a12,12,0,1,0-12-12A12,12,0,0,0,128,108Zm94.957,49.57373-12.36328,55.63232A15.90581,15.90581,0,0,1,200.291,224.82617a16.0905,16.0905,0,0,1-5.34668.91944,15.91184,15.91184,0,0,1-9.96485-3.51709L157.19421,200H98.80573l-27.7862,22.22852a15.99885,15.99885,0,0,1-25.61328-9.023L33.043,157.57275a16.10066,16.10066,0,0,1,3.32812-13.71386l29.60785-35.53028A122.76554,122.76554,0,0,1,74.07617,72.605C85.81055,42.38867,106.61328,22.61621,117.96875,13.519a16.07708,16.07708,0,0,1,20.07813.0669c11.209,9.10644,31.748,28.89355,43.36523,59.10547a124.52709,124.52709,0,0,1,7.98016,34.8833l30.23664,36.28418A16.102,16.102,0,0,1,222.957,157.57373ZM100.67871,184H155.25c14.18359-26.98926,43.00391-100.874-27.2832-157.98926C109.22559,41.02637,52.6709,96.27734,100.67871,184ZM85.729,189.97217q-15.71045-29.291-19.14044-57.38281l-17.92645,21.5122,12.36328,55.6333Zm121.60889-35.87061-18.36963-22.04345q-3.19912,28.26929-18.74341,57.87695l24.74976,19.7998Z"/>
        </svg>
        <pre className={display}>
          !<br/>
          !<br/>
          ^<br/>
          / \<br/>
        /___\<br/>
        |=   =|<br/>
        |     |<br/>
        |     |<br/>
        |     |<br/>
        |     |<br/>
        |     |<br/>
        |     |<br/>
        |     |<br/>
        |     |<br/>
        |     |<br/>
      /|##!##|\<br/>
      / |##!##| \<br/>
    /  |##!##|  \<br/>
    |  / ^ | ^ \  |<br/>
    | /  ( | )  \ |<br/>
    |/   ( | )   \|<br/>
        ((   ))<br/>
      ((  :  ))<br/>
      ((  :  ))<br/>
        ((   ))<br/>
        (( ))<br/>
          ( )<br/>
          .<br/>
          .<br/>
          .<br/>
      </pre>
    </div>
    
  )
}