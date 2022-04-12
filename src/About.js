import Slide from './Slide.js';

function About(){
    return(
        <>
            <Slide />
            <div className="visual_wrap">

                <div className="visual">
                    <div className="visual_text">
                        <h2 className="visual_title">논리와 감성의 균형<span>.</span></h2>
                            <br />
                            옐로우핑거는 브랜드를 돋보이게 하는
                            <br className="type_03" />
                            전문 디지털 에이전시입니다.
                            <br />
                            우리는 프로젝트에 대한 이해와 공감을 바탕으로
                            <br />
                            디지털 커뮤니케이션의 리듬에 맞는 문맥 디자인과 개발에
                            <br className="type_03" />
                            중점을 두며 창의적인 솔루션을 제공합니다.
                            <br />
                    </div>
                </div>

                <div className="filter_wrap">
                    <div className="filter">
                        <img src='./img/filter_icon.png' alt="filter" />
                        <span>FILTER : <span>ALL</span></span>
                    </div>
                    
                    <div className="filter_text">
                        <div className="filter_img">
                            <img src='img/filter_close_icon.png' alt="filter Close" />
                        </div>
                        <div className="filter_span">
                            <span>ALL</span>
                            <span>WCMS</span>
                            <span>공공기관웹사이트</span>
                            <span>기업홈페이지</span>
                            <span>다국어웹사이트</span>
                            <span>라이프/엔터테인먼트</span>
                            <span>맞춤디자인</span>
                            <span>반응형웹</span>
                            <span>브랜드홍보페이지</span>
                            <span>쇼핑몰</span>
                            <span>웹진/블로그</span>
                            <span>자체제작</span>
                            <span>캠페인/랜딩페이지</span>
                        </div>
                    </div>
                </div>

                <ul></ul>

                <div className="load_more_box">
                    <button className="show_img">
                        <img src="./img/menu.png" alt="LOAD MORE" />
                        <span className="title">LOAD MORE</span>
                    </button>
                </div>

                </div>
        </>
    );
}

export default About;