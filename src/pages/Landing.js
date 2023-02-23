import React from "react";
import "../assets/sass/pages/landing.scss";
import "../assets/sass/layout/layout.scss";

// img
import img1 from "../assets/images/logo.png";
import img2 from "../assets/images/ham.png";
import img3 from "../assets/images/pecan.png";
import img4 from "../assets/images/salted.png";
import img5 from "../assets/images/vanlla.png";
import img6 from "../assets/images/twist1.png";
import img7 from "../assets/images/twist2.png";

const Landing = () => {
  return (
    <>
      {/* /!*제이쿼리 연결*!/*/}
      {/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>*/}
      {/* /!*스와이퍼 연결*!/*/}
      {/*<link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />*/}
      {/*        <link rel="stylesheet" href="/css/commen/reset.css">*/}
      {/*            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />*/}
      {/*            <link rel="stylesheet" href="css/commen/animations.css">*/}

      <div className="p__landing">
        <div className="header">
          <div className="m_header">
            <a className="m_logo">
              <img src={img1} alt="하겐다즈 로고" />
            </a>
            <a className="m_menu">
              <img src={img2} alt="모바일 메뉴버튼" />
            </a>
            <div className="m_nav">
              <p>HAAGEN DAZS</p>
              {/*<img className="m_close" src="img/close.png" alt="메뉴 닫기">*/}
              <p className="m_line"></p>
              <ul className="m_subUl">
                <li className="mobile1">
                  MENU
                  <ul className="m_submenu1">
                    <li>신메뉴</li>
                    <li>파인트</li>
                    <li>미니컵</li>
                    <li>스틱바/샌드</li>
                    <li>콘/벌크</li>
                    <li>디저트/굿즈</li>
                  </ul>
                </li>
                <li className="mobile2">
                  br/AND
                  <ul className="m_submenu2">
                    <li>브랜드 스토리</li>
                    <li>하겐다즈 원료</li>
                  </ul>
                </li>
                <li className="mobile3">
                  EVENT
                  <ul className="m_submenu3">
                    <li>멤버쉽 가입 혜택</li>
                    <li>이벤트</li>
                  </ul>
                </li>
                <li className="mobile4">
                  STORE
                  <ul className="m_submenu4">
                    <li>매장소개</li>
                    <li>업소문의</li>
                  </ul>
                </li>
                <li className="mobile5">
                  ABOUT
                  <ul className="m_submenu5">
                    <li>고객센터</li>
                    <li>공지사항</li>
                  </ul>
                </li>
              </ul>
              <div>LOGIN SIGN UP</div>
            </div>
          </div>

          <div className="header_R">
            <ul>
              <li>로그인</li>
              <li>회원가입</li>
              <li>SNS연동</li>
              <li className="h_facebook">
                <a></a>
              </li>
              <li className="h_insta">
                <a></a>
              </li>
              <li className="h_youtube">
                <a></a>
              </li>
            </ul>
          </div>

          <div className="mainWrap">
            <nav>
              <ul className="mainMenu">
                <li>
                  메뉴
                  <ul className="subMenu">
                    <li>파인트</li>
                    <li>미니컵</li>
                    <li>스틱바/샌드</li>
                    <li>콘/벌크</li>
                    <li>디저트/굿즈</li>
                  </ul>
                </li>
                <li>
                  브랜드
                  <ul className="subMenu">
                    <li>브랜드 스토리</li>
                    <li>하겐다즈 원료</li>
                  </ul>
                </li>
                <li>
                  이벤트
                  <ul className="subMenu">
                    <li>멤버쉽 가입 혜택</li>
                    <li>이벤트</li>
                  </ul>
                </li>

                <li className="logo">
                  <img src={img1} alt="하겐다즈 로고" />
                </li>
                <li>
                  매장소개
                  <ul className="subMenu">
                    <li>매장소개</li>
                    <li>업소문의</li>
                  </ul>
                </li>
                <li>
                  고객센터
                  <ul className="subMenu">
                    <li>고객센터</li>
                    <li>공지사항</li>
                  </ul>
                </li>
                <li>
                  온라인 구매
                  <ul className="subMenu">
                    <li>공홈 구매</li>
                    <li>네이버 구매</li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="main">
          <p>
            <span>HAAGEN-DAZS</span>
            <span>NEW</span>
            <span>#MENU</span>
            <span>#EVENT</span>
            <span>#PROMOTION</span>
          </p>

          <div className="back_wrap">
            <input type="radio" name="slide" id="slide01" checked></input>
            <input type="radio" name="slide" id="slide02"></input>
            <input type="radio" name="slide" id="slide03"></input>
            <input type="radio" name="slide" id="slide04"></input>

            <div className="pagewrap">
              <ul className="mainul">
                <li className="mainli">
                  <label htmlFor="slide04" className="left"></label>
                  <label htmlFor="slide02" className="right"></label>
                  <ul className="slide01">
                    <li>
                      <div className="mimg1">
                        <img src={img3} alt="바닐라피칸" />
                      </div>
                      <p>VANILLA PECAN ▶</p>
                    </li>
                    <li>
                      <div className="mimg2">
                        <img src={img4} alt="솔티드카라멜카푸치노" />
                      </div>
                      <p>
                        {" "}
                        SALTED CARAMEL CAPPUCCINO ▶
                        <br />{" "}
                        <span>솔티드 카라멜 카푸치노 신제품 보러가기</span>
                      </p>
                    </li>
                    <li>
                      <div className="mimg3">
                        <img src={img5} alt="바닐라" />
                      </div>
                      <p> VANILLA ▶ </p>
                    </li>
                  </ul>
                </li>
                <li className="mainli">
                  <label htmlFor="slide01" className="left"></label>
                  <label htmlFor="slide03" className="right"></label>

                  <ul className="slide02">
                    <li>
                      <div className="timg timg1">
                        <img src={img6} alt="트위스트바닐라" />
                      </div>
                      <p>TWIST &amp; CRUNCH 벨지안 초코 &amp; 바닐라 ▶ </p>
                    </li>
                    <li>
                      <div className="timg timg2">
                        <img src={img7} alt="트위스트딸기" />
                      </div>
                      <p>TWIST &amp; CRUNCH 벨지안 초코 &amp; 딸기 ▶</p>
                      <p className="m_s2T">
                        TWIST &amp; CRUNCH 벨지안 초코 &amp; 시리즈 ▶
                      </p>
                    </li>
                  </ul>
                </li>

                <li className="mainli">
                  <label htmlFor="slide02" className="left"></label>
                  <label htmlFor="slide04" className="right"></label>
                  <ul className="slide03">
                    <li>
                      {/*<img src="img/main3_sale.png" alt="세일이벤트">*/}
                      {/*<img className="tablet3" src="img/tablet3.jpg" alt="세일이벤트">*/}
                      <p> Haagen-Dazs Event 지금 바로 구매하러 가기 ▶</p>
                    </li>
                  </ul>
                </li>

                <li className="mainli">
                  <label htmlFor="slide03" className="left"></label>
                  <label htmlFor="slide01" className="right"></label>
                  <ul className="slide04">
                    <li>
                      {/*<img src="img/main4_holiday.png" alt="세일이벤트">*/}
                      {/*<img className="tablet4" src="img/tablet4.jpg" alt="세일이벤트">*/}
                      <p> Holidays SET 지금 바로 확인하러 가기 ▶</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="content2">
          <div className="line1"></div>
          <div className="title">
            <h1>하겐다즈 추천메뉴</h1>
            <h2>Recommended Menu</h2>
          </div>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {/*<img src="img/lime.png" alt="라임">*/}
                <p>
                  {" "}
                  LIME MOJITO
                  <br />
                  라임 모히또
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/pinacolada.png" alt="피나콜라다">*/}
                <p>
                  {" "}
                  PINA COLADA <br /> 피나콜라다
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/dark.png" alt="다크초콜릿">*/}
                <p>
                  {" "}
                  CHOCOLATE&amp;ALMOND
                  <br />
                  다크 초콜릿 아몬드
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/cookies.png" alt="쿠키앤크림">*/}
                <p>
                  {" "}
                  COOKIES&amp;CREAM <br />
                  쿠키앤크림
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/green.png" alt="그린티녹차">*/}
                <p>
                  GREEN TEA <br />
                  그린티 녹차
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/maca.png" alt="마카다미아">*/}
                <p>
                  MACADAMIA NUT
                  <br /> 마카다미아 넛{" "}
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/mango.png" alt="망고">*/}
                <p>
                  {" "}
                  MANGO &amp; CREAM <br /> 망고앤크림
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/melon.png" alt="멜론">*/}
                <p>
                  {" "}
                  CANTALOUPE MELON
                  <br />
                  칸탈로프 멜론
                </p>
              </div>
            </div>
          </div>
          <div className="but">
            <div className="s_left swiper-button-prev"> </div>
            {/*구매하러 가기 BUY*/}
            <div className="s_right swiper-button-next"></div>
          </div>

          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {/*<img src="img/strowberries.png" alt="딸기와크림">*/}
                <p>
                  {" "}
                  STROWBERIES&amp;CREAM
                  <br />
                  딸기앤크림
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/greentea.png" alt="그린티">*/}
                <p>
                  GREEN TEA&amp;ALMOND
                  <br /> 그린티아몬드{" "}
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/cookiescream.png" alt="쿠키앤크림">*/}
                <p>
                  COOKIES&amp;CREAM
                  <br />
                  쿠키앤크림
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/almone.png" alt="바닐라 카라멜 아몬드">*/}
                <p>
                  VANILLA CARAMEL
                  <br /> 바닐라 카라멜 아몬드
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/peanut.png" alt="피넛버터">*/}
                <p>
                  {" "}
                  PEANUT BUTTER <br />
                  피넛 버터 크런치
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/packpeanut.png" alt="스틱바팩">*/}
                <p className="stick_mr">
                  CARAMEL &amp; BUTTER
                  <br /> 솔티드 카라멜 &amp; 피넛 버터{" "}
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/packcaramel.png" alt="스틱바팩">*/}
                <p className="stick_mr">
                  CARAMEL &amp; VANILLA
                  <br />
                  솔티드 &amp; 바닐라 카라멜
                </p>
              </div>
              <div className="swiper-slide">
                {/*<img src="img/packchoc.png" alt="스틱바팩">*/}
                <p className="stick_mr">
                  VANILLA &amp; CHOC
                  <br /> 바닐라 카라멜 &amp; 초콜렛촉
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content3">
          <p className="recipe_ko">특별한 맛, 특별한 레시피</p>
          <p className="recipe_en"> HAAGEN RECIPE</p>

          <div className="recipeWrap">
            <div className="recipe1">
              {/*<a className="modal-open" href="javascript:openModal('modal1');">*/}
              <span className="effect">
                아포가토 레시피 CLICK{" "}
                {/*<img src="img/click.png" alt="레시피 보기">*/}
                <br />
              </span>
              {/*</a>*/}
              <p className="recipe_p">
                <span>HAAGEN AFFOGATO</span>
                <br />
                하겐다즈 바닐라 아포가토
                <br />
                고소한 바닐라 아이스크림 위에
                <br />
                에스프레소 샷을 올리면 완성
              </p>
              <div className="modal1 modal_con">
                <div className="modal_Wrap">
                  {/*<a href="javascript:;" className="affo_close">*/}
                  {/*<img src="img/close.png" alt="취소버튼"></img>*/}
                  {/*</a>*/}
                  <div className="affo1">
                    <h3>하겐다즈 아포가토 </h3>
                    <p></p>
                    {/*<img src="img/affo.jpg" alt="아포가토">*/}
                  </div>
                  <div className="affo2">
                    <div className="affoTop">
                      <div>
                        <p>FLAVOUR</p>
                        <ul>
                          <li>
                            {/*<img src="img/flavor_maca.png" alt="마카다미아맛">*/}
                            <p>마카다미아넛</p>
                          </li>
                          <li>
                            {/*<img src="img/flavor_vanilla.png" alt="바닐라맛">*/}
                            <p>바닐라</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p>INGREDIENT</p>
                        <p>1. 하겐다즈 아이스크림 1~2 스쿱</p>
                        <p>2. 에스프레소 1샷</p>
                      </div>
                    </div>
                    <div className="affo_direc">
                      <p>DIRECTION </p>
                      <p>
                        1. 유리잔에 하겐다즈 아이스크림을 1 ~ 2 스쿱을 담는다.{" "}
                      </p>
                      <p>
                        2. 아이스크림 위에 준비한 에스프레소 샷을 부어주면 완성!{" "}
                      </p>
                      <ul>
                        {/*<li><img src="img/step_05_01.png" alt="유리잔안에아이스크림"></li>*/}
                        {/*<li><img src="img/step_05_02.png" alt="아이스크림과 에스프레소샷사진"></li>*/}
                        {/*<li><img src="img/step_05_03.png" alt="이포가토이미지"></li>*/}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="recipe2">
              {/*<a className="modal-open" href="javascript:openModal('modal2');">*/}
              <span className="effect">
                라떼 레시피 CLICK{" "}
                {/*<img src="img/click.png" alt="레시피 보기">*/}
                <br />
              </span>
              {/*</a>*/}
              <p className="recipe_p">
                <span>GREEN TEA LATTE</span>
                <br />
                하겐다즈 그린티 아이스 라떼
                <br />
                시원한 우유위에 하겐다즈 그린티
                <br />
                아이스크림을 올리면 완성
              </p>
              <div className="modal2 modal_con">
                <div className="modal_Wrap">
                  {/*<a href="javascript:;" className="affo_close"><img src="img/close.png" alt="취소버튼"> </a>*/}
                  <div className="latte1">
                    <h3>하겐다즈 아이스크림 라떼 </h3>
                    <p></p>
                    <div className="v_stop">
                      {/*<iframe id="player" width="560" height="315" style="border:none" src="https://www.youtube.com/embed/USfjmw5URCk?autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
                    </div>
                  </div>
                  <div className="latte2">
                    <p>FLAVOUR</p>
                    <ul>
                      <li>
                        {/*<img src="img/flavor_vanilla.png" alt="바닐라맛">*/}
                        <p>바닐라</p>
                      </li>
                      <li>
                        {/*<img src="img/flavor_green.png" alt="그린티맛">*/}
                        <p>그린티</p>
                      </li>
                      <li>
                        {/*<img src="img/flavor_straw.png" alt="스트로베리맛">*/}
                        <p>스트로베리</p>
                      </li>
                      <li>
                        {/*<img src="img/flavor_maca.png" alt="마카다미아넛맛">*/}
                        <p>마카다미아넛</p>
                      </li>
                      <li>
                        {/*<img src="img/flavor_tira.png" alt="티라미수맛">*/}
                        <p>티라미수</p>
                      </li>
                      <li>
                        {/*<img src="img/flavor_choco.png" alt="초콜릿맛">*/}
                        <p>초콜릿</p>
                      </li>
                      <li>
                        {/*<img src="img/flavor_cookies.png" alt="쿠키앤크림맛">*/}
                        <p>쿠키앤크림</p>
                      </li>
                    </ul>
                  </div>
                  <div className="latte3">
                    <p className="latte3_title">INGREDIENT</p>
                    <p>1. 하겐다즈 아이스크림 1스쿱</p>
                    <p>2. 우유 200ml</p>
                    <p>3. 얼음 </p>

                    <p className="latte3_title">DIRECTION</p>
                    <p>1. 컵에 얼음과 우유 200ml를 붓는다.</p>
                    <p>2. 하겐다즈 아이스크림을 올려 완성</p>

                    <p className="latte3_title">TIP</p>
                    <p>아이스크림에 따라 녹차가루, 초코시럽,</p>
                    <p>딸기시럽 등을 곁들여 드셔보세요.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="recipe3">
              {/*<a className="modal-open" href="javascript:openModal('modal3');">*/}
              <span className="effect">
                칵테일 레시피 CLICK{" "}
                {/*<img src="img/click.png" alt="레시피 보기">*/}
                <br />
              </span>
              {/*</a>*/}
              <p className="recipe_p">
                <span>HAAGEN COCKTAIL</span>
                <br />
                베일리스 티라미수 칵테일
                <br />
                베일리스 리큐어와 에스프레소,
                <br />
                하겐다즈 아이스크림의 만남
              </p>
              <div className="modal3 modal_con">
                <div className="modal_Wrap">
                  {/*<a href="javascript:;" className="affo_close"><img src="img/close.png" alt="취소버튼"> </a>*/}
                  <div className="cock1">
                    <h3> 베일리스 티라미수 칵테일 </h3>
                    <p></p>
                    {/*<img src="img/cocktail.jpg" alt="칵테일이미지">*/}
                  </div>
                  <div className="cock2">
                    <div className="cockTop">
                      <div>
                        <p>FLAVOUR</p>
                        <ul>
                          <li>
                            {/*<img src="img/flavor_vanilla.png" alt="바닐라맛">*/}
                            <p>바닐라</p>
                          </li>
                          <li>
                            {/*<img src="img/flavor_maca.png" alt="마카다미아맛">*/}
                            <p>마카다미아넛</p>
                          </li>
                          <li>
                            {/*<img src="img/flavor_tira.png" alt="티라미수맛">*/}
                            <p>티라미수</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p>INGREDIENT</p>
                        <p>1. 하겐다즈 아이스크림 1~2 스쿱</p>
                        <p>2. 베일리스 45ml</p>
                        <p>3. 에스프레소 35ml &#91;약 1.5샷&#93;</p>
                        <p>4. 시나몬 파우더 약간</p>
                        <p>5. 우유100ml , 얼음 </p>
                      </div>
                    </div>
                    <div className="cock_direc">
                      <p>DIRECTION </p>
                      <p>
                        1. 컵에 얼음과 아이리쉬 크림 리큐어 베일리스 45ml를
                        붓는다.{" "}
                      </p>
                      <p>
                        2. 에스프레소 35ml를 넣고 우유를 부어 다같이 섞어준다.{" "}
                      </p>
                      <p>3. 2번 위에 아이스크림 1스쿱을 올린다. </p>
                      <p>4. 시나몬 파우더를 뿌려 완성. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recipe4">
              {/*<a className="modal-open m4" href="javascript:openModal('modal4');">*/}
              <span className="effect">
                파르페 레시피 CLICK
                {/*<img src="img/click.png" alt="레시피 보기">*/}
                <br />
              </span>
              {/*</a>*/}
              <p className="recipe_p">
                <span>ICE CREAM PARFAIT</span>
                <br />
                하겐다즈 아이스크림 파르페
                <br />
                여러가지 재료들과 아이스크림의
                <br />
                조화로운 맛을 즐겨보세요!
              </p>
              <div className="modal4 modal_con">
                <div className="modal_Wrap">
                  {/*<a href="javascript:;" className="affo_close"><img src="img/close.png" alt="취소버튼"> </a>*/}
                  <div className="parfait1">
                    <h3> 아이스크림 파르페 </h3>
                    <p></p>
                    <div className="p_stop">
                      {/*<iframe id="player2" width="560" height="315" style="border:none" src="https://www.youtube.com/embed/p57eyruUuC4?autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
                    </div>
                  </div>
                  <div className="parfait2">
                    <div className="parfaitTop">
                      <div>
                        <p>FLAVOUR</p>
                        <ul>
                          <li>
                            {/*<img src="img/flavor_straw.png" alt="스트로베리맛">*/}
                            <p>스트로베리</p>
                          </li>
                          <li>
                            {/*<img src="img/flavor_cookies.png" alt="쿠키앤크림맛">*/}
                            <p>쿠키앤크림</p>
                          </li>
                          <li>
                            {/*<img src="img/flavor_choco.png" alt="초콜릿맛">*/}
                            <p>초콜릿</p>
                          </li>
                          <li>
                            {/*<img src="img/flavor_blue.png" alt="블루베리크림맛">*/}
                            <p>블루베리크림</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p>INGREDIENT</p>
                        <p>1. 하겐다즈 아이스크림 1~2 스쿱</p>
                        <p>2. 오레오 6개</p>
                        <p>3. 빼빼로 등 긴 과자</p>
                        <p>4. 생크림 100ml</p>
                        <p>5. 딸기 약 8개 </p>
                      </div>
                    </div>
                    <div className="parfait_direc">
                      <p>DIRECTION </p>
                      <p>
                        1. 오레오 3개는 크림 제거 후 잘게 부수고, 나머지 3개는
                        1/4등분 한다.{" "}
                      </p>
                      <p>
                        2. 딸기 6개는 슬라이스 하여 준비, 남은 딸기는 전부
                        다진다.{" "}
                      </p>
                      <p>
                        3. 컵에 생크림 > 오레오 > 생크림 > 딸기 순으로 차곡차곡
                        쌓아준다.{" "}
                      </p>
                      <p>
                        4. 생크림을 평평하게 펴주고 아이스크림 1스쿱과 과자를
                        꽂으면 완성!{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*<a href="https://haagendazs-store.co.kr/" target="_blank" className="recipe_btn">*/}
          {/*    <span className="re_pc">레시피 더보러 가기 ▶</span>*/}
          {/*    <span className="re_mo">사진을 클릭해서 레시피를 확인해 보세요 ▲</span>*/}
          {/*</a>*/}
        </section>

        <div className="eventWrap">
          <div className="eventText">
            <p>HAAGEN EVENT</p>
            <p>
              하겐다즈와 함께하는 이벤트 <br />
              SNS를 통해 확인 후 참여해 보세요.
            </p>
            <div className="eventIcon">
              {/*<img src="img/snsfacebook.png" alt="페이스북">*/}
              {/*<img src="img/snsins.png" alt="인스타그램">*/}
              {/*<img src="img/snsyotube.png" alt="유튜브">*/}
            </div>
          </div>
          <div className="videoWrap">
            <div className="eventVideo">
              {/*<iframe width="900" height="506" style="border:none" src="https://www.youtube.com/embed/TnFWhFrKuXI?autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
            </div>
          </div>
        </div>

        <div className="instargram">
          <div className="in_text">
            <h3>INSTARGRAM</h3>
            <p>인스타그램</p>
          </div>
          <div className="in_img">
            {/*<ul>*/}
            {/*    <li> <img src="img/inone.jpg" alt="행사"> </li>*/}
            {/*    <li><img src="img/intwo.jpg" alt="행사"></li>*/}
            {/*    <li><img src="img/inthree.jpg" alt="행사"></li>*/}
            {/*    <li><img src="img/infour.jpg" alt="행사"></li>*/}
            {/*    <li><img src="img/infive.jpg" alt="행사"></li>*/}
            {/*</ul>*/}
            {/*<ul>*/}
            {/*    <li><img src="img/insix.jpg" alt="행사"></li>*/}
            {/*    <li><img src="img/inseven.jpg" alt="행사"></li>*/}
            {/*    <li><img src="img/ineight.jpg" alt="행사"> </li>*/}
            {/*    <li><img src="img/innine.jpg" alt="행사"></li>*/}
            {/*    <li><img src="img/inten.jpg" alt="행사"></li>*/}
            {/*</ul>*/}
          </div>
        </div>

        <footer className="footer">
          <div className="f_top">
            <div className="ftop_text">
              <p>
                {" "}
                공지사항&nbsp;&nbsp; | &nbsp;&nbsp; 이벤트&nbsp;&nbsp; |
                &nbsp;&nbsp; 매장안내&nbsp;&nbsp; | &nbsp;&nbsp; 고객센터
              </p>
            </div>
          </div>

          <div className="f_wrap">
            {/*<img src="img/logotwo.png" alt="하겐다즈 로고">*/}

            <div className="f_textL">
              <p>한국하겐-다즈(주) 대표 : 김미조</p>
              <p>
                주소 : 서울특별시 강남구 테헤란로311 [역삼동, 아남타워 6층] |
                개인정보관리책임자 : 김미조대표 <br />
                통신판매신고 : 강남-8166 | 대표전화 : 02-508-8500{" "}
                <br className="br_mo" /> | 사업자등록번호 : 106-81-28964
              </p>

              <p> 주식회사 에스와이피글로벌 대표 : 김광용[사업자정보확인] </p>
              <p>
                주소 : 서울특별시 강남구 봉은사로112길 26, 5층 502호
                <br className="br_mo" /> [삼성동, 한호빌딩]
                <br />
                사업자등록번호 : 262-88-00829 <br className="br_mo" /> |
                통신판매신고 : 2018-서울강남-00403
                <br />
                Email : cs@unitoa.com | 개인정보관리책임자 : 조현정{" "}
                <br className="br_mo" /> | 대표전화 : 070-7549-7020
              </p>
            </div>

            <div className="f_textR">
              <p> 하겐다즈 고객만족센터</p>
              <p> 070-7549-7020</p>
              <p>
                *고객센터 운영시간 : 평일 10:00 ~ 17:00 <br />
                (점심시간 12:00 ~ 13:00)
              </p>
              <p> 하겐다즈몰 판매운영대행 : 주식회사 에스와이피 글로벌</p>
            </div>
          </div>

          <div className="f_bottom">
            <div className="fbot_text">
              <p> capyright @ 2021 Haagen-Dazs Korea. All Right Reserved.</p>
              <p>
                {" "}
                개인정보 처리방침 &nbsp;&nbsp; | &nbsp;&nbsp; 이용약관
                &nbsp;&nbsp; | &nbsp;&nbsp; 이메일 무단수집거부
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
