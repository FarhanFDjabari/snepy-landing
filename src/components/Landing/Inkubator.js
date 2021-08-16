import './Inkubator.scss'
import BIIWUB from '../../asset/img/BIIW_UB.png'
import PIF from '../../asset/img/PIF.png'
import Compfest from '../../asset/img/Compfest.png'
import FounderPlus from '../../asset/img/Founderplus.png'
import Kewirus from '../../asset/img/Kewirus.png'
import styled from 'styled-components'

const ImageBox = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 5px 20px;
`

function Inkubator() {

  let listImage = [BIIWUB, PIF, Compfest, FounderPlus, Kewirus, Kewirus]

  return(
    <>
      <div className="container-fluid">
        <h1>Inkubator Kami</h1>
        <div className="inkubator-list-box">
          {listImage.map(image => (
            <ImageBox image={image} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Inkubator