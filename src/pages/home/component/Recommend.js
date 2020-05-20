import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem,
  DownloadAppInfo
} from '../style.js'
class Recommend extends PureComponent {

  render () {
    const { recommendBgImgList, downLoadQR } = this.props;
    return (
      <Fragment>
        <RecommendWrapper>
          {recommendBgImgList.map((item) => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
            )
          })}
          <DownloadAppInfo>
            <img className='QR-img' src={downLoadQR} alt='二维码'></img>
            <div className='info'>
              <div className='title'>下载简书手机App</div>
              <div className='desc'>随时随地发现和创作内容</div>
            </div>
          </DownloadAppInfo>
        </RecommendWrapper>

      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recommendBgImgList: state.getIn(['home', 'recommendBgImgList']),
    downLoadQR: state.getIn(['home', 'downLoadQR'])
  }
}

export default connect(mapStateToProps, null)(Recommend);