import React from 'react';
import { Col , Badge } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
const Temp3 = styled.h1`
color: white;
font-size: 40px;
font-weight: normal;
`;
const DesTemp2 = styled.h2`
color: white;
font-size: 15px;
`;
const Heading = styled(Badge)`
font-weight: 500;
`;
function descriptionAQI({ ketquaAQI, trangthai }) {
  const renderIcon = () => {
    if (ketquaAQI?.data?.aqi) {
      try {
        const AqiCN = ketquaAQI?.data?.aqi;
        switch (true) {
          case (0 <= AqiCN) && (AqiCN <= 50):
            return (
              <>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center  col-4" style={{ backgroundColor: "#87c13c" }}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48">
                      <g fill="none">
                        <path d="M0 48L48 48 48 0 0 0z" />
                        <g fill="#607631">
                          <path d="M15.614 29.612c.52.15.999.223 1.465.223.466 0 .945-.073 1.465-.223.233-.067.368-.311.3-.545-.033-.114-.108-.208-.213-.265-.1-.055-.218-.068-.33-.035-.878.253-1.563.254-2.442 0-.111-.034-.23-.02-.333.036-.104.057-.18.15-.213.264-.032.114-.019.232.037.335.057.103.15.177.264.21" transform="translate(6.947 1.263)" />
                          <path d="M33.228 23.199c-.238-.17-.518-.257-.82-.257l-.062.001c.368-1.782.624-3.561.762-5.289.383-4.808-.867-8.922-3.617-11.896C26.559 2.586 22.025.767 17.052.767c-1.246 0-2.36.122-2.997.239-.284-.15-.518-.285-.733-.425L13.27.547c-.113-.076-.267-.045-.346.069l-.334.49c-.038.055-.053.125-.04.193.014.067.054.125.11.161l.053.034c.862.566 1.803.991 2.582 1.166.855.193 1.28.606 1.457.835l.032.04c.074.096.203.125.316.07l.531-.278c.064-.034.11-.094.128-.165.016-.072.002-.146-.041-.205l-.042-.059c-.15-.209-.564-.698-1.353-1.046.273-.011.555-.019.73-.019 4.68 0 8.927 1.694 11.654 4.648 2.579 2.794 3.701 6.524 3.337 11.088-.157 1.966-.475 4.01-.944 6.081l-.05.271c-.018.092.006.186.066.258.059.072.15.115.243.115h.361c.07 0 .135-.023.193-.067l.057-.044c.22-.168.495-.218.641-.113.315.222.313 1.023-.004 1.992l-.363 1.114c-.187.578-.38 1.176-.62 1.886-.358 1.064-1 1.786-1.731 1.959l.014-.035.021-.049c.041-.094.082-.19.123-.29.029-.077.027-.164-.005-.24-.033-.075-.096-.137-.174-.168l-.41-.16c-.16-.06-.342.02-.405.176-1.77 4.445-3.984 7.807-6.97 10.58-1.61 1.496-3.177 1.803-5.035 1.803s-3.425-.307-5.036-1.804c-2.985-2.773-5.2-6.135-6.97-10.579-.063-.159-.241-.235-.407-.176l-.408.16c-.077.031-.14.093-.173.168-.033.076-.034.164-.003.242.043.109.088.214.134.319l.02.048c-.739-.174-1.366-.881-1.729-1.954-.252-.746-.459-1.39-.625-1.907l-.356-1.095c-.318-.968-.32-1.769-.005-1.991.153-.107.418-.056.664.13l.068.044c.056.034.126.054.186.047.154-.018.59-.06.617-.067.367-.09.728-.41.989-.873.414-.734.708-1.799 1.05-3.034.68-2.47 1.53-5.543 3.728-6.928 2.467-1.555 4.597-1.28 7.064-.962 2.379.306 5.072.653 8.572-.566l.03.02c.266 1.903 1.466 4.403 4.046 5.747.216.108.48.025.592-.187.055-.104.065-.223.03-.336-.035-.112-.112-.203-.217-.257-2.373-1.237-3.417-3.535-3.602-5.273-.014-.132-.09-.253-.202-.325l-.386-.246c-.117-.073-.256-.09-.385-.042-3.406 1.234-6.047.893-8.377.591-2.522-.323-4.905-.627-7.634 1.092-2.486 1.567-3.385 4.822-4.107 7.438-.325 1.178-.606 2.195-.968 2.836-.121.215-.242.33-.322.389-.428-1.95-.72-3.88-.869-5.738-.74-9.28 4.831-13.022 8.22-14.426l.019-.009c.414.18.802.312 1.155.392.855.192 1.28.605 1.457.835l.032.04c.073.095.204.124.315.07l.532-.278c.064-.035.11-.095.127-.165s.003-.145-.04-.206l-.042-.059c-.214-.297-.85-1.019-2.14-1.31-.653-.147-1.46-.514-2.214-1.007l-.052-.034c-.115-.075-.267-.046-.346.07l-.334.49c-.038.055-.053.124-.04.193.014.066.054.125.11.162l.053.033c.077.05.157.1.238.147C3.4 5.218.446 10.732.998 17.655c.136 1.711.392 3.49.762 5.288-.318-.01-.628.075-.882.255-.437.309-1.068 1.135-.393 3.195l.353 1.089c.19.589.387 1.197.63 1.92.68 2.01 2.044 2.727 3.095 2.727.038 0 .077-.003.118-.007 1.734 3.898 3.834 6.916 6.609 9.494 1.974 1.836 3.936 2.09 5.762 2.09 1.826 0 3.788-.254 5.763-2.09 2.775-2.578 4.876-5.596 6.609-9.494.04.004.08.007.119.007 1.05 0 2.415-.717 3.093-2.728.263-.779.474-1.431.651-1.982l.332-1.024c.677-2.062.046-2.888-.391-3.196" transform="translate(6.947 1.263)" />
                          <path d="M24.142 23.38c0-.55-.718-.998-1.6-.998-.88 0-1.597.447-1.597.998 0 .559.701.997 1.598.997.881 0 1.599-.447 1.599-.997M11.54 24.377c.882 0 1.6-.447 1.6-.997s-.718-.998-1.6-.998c-.882 0-1.599.447-1.599.998 0 .56.703.997 1.599.997M13.567 34.376h6.972c-.406.974-1.378 2.505-3.486 2.505-2.11 0-3.081-1.53-3.486-2.505m3.486 3.384c2.559 0 4.017-1.913 4.528-3.703.038-.132.011-.276-.072-.386-.083-.11-.214-.175-.35-.175h-8.211c-.138 0-.27.065-.352.175-.082.11-.109.254-.072.386.511 1.79 1.97 3.703 4.529 3.703M25.053 21.01c.044-.109.043-.228-.002-.336-.045-.109-.13-.193-.24-.237-.499-.202-1.297-.442-2.263-.442-.97 0-1.77.243-2.272.447-.225.09-.334.347-.243.572.068.167.227.275.407.275.059 0 .115-.011.165-.033.432-.174 1.119-.382 1.943-.382.827 0 1.508.206 1.934.378.222.09.48-.02.571-.243M13.478 21.256c.052.022.108.033.166.033.18 0 .34-.108.407-.275.044-.109.043-.228-.003-.336-.046-.108-.13-.192-.24-.237-.501-.203-1.303-.447-2.272-.447-.965 0-1.763.24-2.263.443-.11.044-.194.128-.24.236-.045.108-.047.228-.002.336.087.222.344.332.572.243.427-.172 1.11-.378 1.933-.378.826 0 1.511.208 1.942.382" transform="translate(6.947 1.263)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </Col>
                <Col xl="2" sm="4" className="d-flex align-items-center justify-content-center  col-4" style={{ backgroundColor: "rgb(168 224 95 / 63%)" }}>
                  <div>
                    <Temp3 className="display-6" style={{ textAlign: 'center' }}>
                      {AqiCN}
                    </Temp3>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      ??o ta??i {ketquaAQI?.data?.city?.name}
                    </DesTemp2>
                  </div>
                </Col>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "rgb(168 224 95 / 63%)" }}>
                  <div>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      Kh??ng khi?? t????t
                                        </DesTemp2>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      PM2.5 | {ketquaAQI?.data?.iaqi?.pm25?.v} ug/m3
                                        </DesTemp2>
                  </div>
                </Col>
              </>
            )
          case (51 <= AqiCN) && (AqiCN <= 100):
            return (
              <>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center  col-4" style={{ backgroundColor: "#efbe1d" }}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48">
                      <g fill="none">
                        <path d="M0 48L48 48 48 0 0 0z" />
                        <g fill="#8C6C1D">
                          <path d="M17.08 29.835c.465 0 .944-.073 1.463-.223.234-.067.368-.312.301-.545-.032-.114-.108-.208-.212-.265-.1-.056-.219-.068-.33-.035-.88.253-1.565.253-2.444 0-.11-.034-.228-.021-.332.036-.105.057-.18.151-.213.265-.067.232.068.477.302.544.519.15.998.223 1.464.223" transform="translate(6.947 1.263)" />
                          <path d="M33.228 23.199c-.254-.181-.563-.271-.882-.256.368-1.782.624-3.56.762-5.289.383-4.808-.867-8.922-3.617-11.896C26.559 2.586 22.025.767 17.053.767c-1.247 0-2.362.122-2.998.239-.282-.148-.516-.283-.733-.425L13.27.546c-.113-.074-.268-.044-.346.07l-.334.49c-.039.056-.054.126-.039.192.013.067.053.126.11.162l.052.034c.862.566 1.803.991 2.58 1.166.858.194 1.282.606 1.459.835l.033.042c.075.095.2.122.314.068l.532-.278c.064-.034.11-.094.127-.164s.003-.145-.04-.206l-.042-.059c-.15-.209-.564-.698-1.353-1.046.274-.011.555-.019.73-.019 4.68 0 8.927 1.694 11.654 4.648 2.579 2.794 3.701 6.524 3.337 11.088-.157 1.966-.475 4.01-.944 6.081l-.05.271c-.018.092.006.186.066.258.059.072.15.115.243.115h.361c.07 0 .135-.023.193-.067l.057-.044c.22-.168.493-.218.641-.113.315.222.313 1.023-.004 1.992l-.363 1.114c-.187.578-.38 1.176-.62 1.886-.358 1.064-1 1.786-1.731 1.959l.014-.035.021-.049c.041-.094.082-.19.123-.29.029-.077.027-.164-.005-.24-.033-.075-.096-.137-.174-.168l-.41-.16c-.16-.06-.342.02-.405.176-1.77 4.445-3.984 7.807-6.97 10.58-1.61 1.496-3.177 1.803-5.035 1.803s-3.425-.307-5.036-1.804c-2.985-2.772-5.198-6.134-6.97-10.578-.063-.161-.243-.238-.406-.177l-.409.16c-.077.031-.14.093-.173.168-.032.076-.033.163-.003.242.045.115.093.224.14.333l.016.035c-.74-.174-1.367-.882-1.73-1.956-.24-.706-.432-1.303-.618-1.88l-.364-1.12c-.318-.969-.32-1.77-.005-1.992.152-.107.417-.056.664.13l.067.044c.058.035.122.051.189.047.154-.011.575-.057.615-.067.368-.092.729-.41.989-.873.413-.734.708-1.8 1.05-3.033.68-2.47 1.53-5.543 3.728-6.93 2.467-1.555 4.598-1.28 7.064-.961 2.378.306 5.071.653 8.572-.566l.03.02c.266 1.903 1.466 4.403 4.046 5.747.216.108.48.025.592-.187.055-.104.065-.223.03-.336-.035-.112-.112-.203-.217-.257-2.373-1.237-3.417-3.535-3.602-5.273-.014-.132-.09-.253-.202-.325l-.386-.246c-.116-.073-.256-.09-.385-.042-3.406 1.234-6.047.893-8.377.591-2.521-.322-4.904-.628-7.635 1.092-2.484 1.567-3.384 4.822-4.11 7.45-.324 1.172-.604 2.185-.964 2.824-.121.216-.242.33-.322.39-.429-1.955-.721-3.885-.869-5.739-.74-9.28 4.832-13.022 8.22-14.426l.019-.008c.414.18.802.312 1.154.39.857.194 1.28.606 1.458.836l.032.04c.072.095.203.123.315.07l.53-.278c.065-.033.111-.093.129-.164.018-.071.004-.147-.04-.207l-.042-.058c-.213-.297-.847-1.019-2.14-1.311-.65-.146-1.458-.513-2.214-1.007l-.05-.033c-.113-.077-.269-.047-.349.068l-.333.49c-.038.056-.054.125-.04.193.013.066.053.125.11.163l.053.033c.078.05.159.1.238.147C3.4 5.218.446 10.732.998 17.655c.137 1.714.392 3.492.761 5.288-.32-.017-.629.076-.881.255-.437.309-1.07 1.135-.393 3.195L.82 27.42c.22.684.408 1.265.65 1.983.679 2.01 2.043 2.727 3.093 2.727.04 0 .077-.003.12-.007 1.733 3.899 3.833 6.917 6.608 9.494 1.975 1.836 3.936 2.09 5.762 2.09 1.826 0 3.788-.254 5.763-2.09 2.775-2.578 4.876-5.596 6.609-9.494.04.004.08.007.119.007 1.05 0 2.415-.717 3.093-2.728.263-.779.474-1.431.651-1.982l.332-1.024c.677-2.062.045-2.888-.391-3.196" transform="translate(6.947 1.263)" />
                          <path d="M18.526 37.204v-.15c.074-.08.114-.182.114-.29 0-.108-.04-.21-.114-.29v-.151h-2.94v.144c-.079.082-.122.186-.122.297 0 .11.043.215.121.296v.144h2.941zM21.137 34.643c0-.242-.197-.44-.439-.44h-7.29c-.243 0-.44.198-.44.44 0 .243.197.44.44.44h7.29c.242 0 .439-.197.439-.44M25.18 20.459c0-.243-.197-.44-.438-.44h-4.396c-.243 0-.44.197-.44.44 0 .242.197.44.44.44h4.396c.241 0 .438-.198.438-.44M22.543 24.377c.881 0 1.599-.447 1.599-.997s-.718-.998-1.6-.998c-.88 0-1.597.447-1.597.998 0 .56.701.997 1.598.997M14.178 20.459c0-.243-.197-.44-.44-.44H9.344c-.242 0-.44.197-.44.44 0 .242.198.44.44.44h4.396c.242 0 .439-.198.439-.44M11.54 24.377c.882 0 1.6-.447 1.6-.997s-.718-.998-1.6-.998c-.881 0-1.597.447-1.597.998 0 .56.7.997 1.597.997" transform="translate(6.947 1.263)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </Col>
                <Col xl="2" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "rgb(253 214 75 / 63%)" }}>
                  <div>
                    <Temp3 className="display-6" style={{ textAlign: 'center' }}>
                      {AqiCN}
                    </Temp3>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      ??o ta??i {ketquaAQI?.data?.city?.name}
                    </DesTemp2>
                  </div>
                </Col>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "rgb(253 214 75 / 63%)" }}>
                  <div>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      Kh??ng khi?? trung bi??nh
                                        </DesTemp2>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      PM2.5 | {ketquaAQI?.data?.iaqi?.pm25?.v} ug/m3
                                        </DesTemp2>
                  </div>
                </Col>
              </>
            )
          case (101 <= AqiCN) && (AqiCN <= 150):
            return (
              <>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#f27e2f" }}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48">
                      <g fill="none">
                        <path d="M0 48L48 48 48 0 0 0z" />
                        <g fill="#974A20">
                          <path d="M15.904 36.324c-.243 0-.44.197-.44.44 0 .242.197.44.44.44h2.298c.242 0 .439-.198.439-.44 0-.243-.197-.44-.44-.44h-2.297zM15.614 29.612c.52.15.999.223 1.465.223.467 0 .945-.073 1.465-.223.233-.067.368-.311.3-.545-.033-.114-.108-.208-.213-.265-.101-.055-.22-.068-.33-.035-.88.254-1.564.254-2.442 0-.111-.034-.23-.021-.332.036-.105.057-.181.15-.213.264-.033.112-.02.232.037.335.057.103.15.178.263.21M20.994 35.964c.135 0 .26-.06.343-.164.074-.092.108-.207.094-.323-.012-.117-.069-.222-.16-.295-1.154-.93-2.522-1.402-4.065-1.402-1.544 0-2.911.472-4.066 1.401-.091.074-.149.179-.16.295-.014.117.02.232.094.324s.18.15.297.161c.115.012.23-.022.32-.094.994-.8 2.176-1.206 3.515-1.206 1.338 0 2.52.405 3.513 1.206.08.063.175.097.275.097M25.075 21.437c.117-.015.22-.076.291-.169.072-.093.102-.208.088-.324-.03-.22-.222-.381-.444-.381l-.051.003c-1.572.206-3.239-.339-4.356-1.427-.172-.168-.451-.164-.62.008-.083.084-.128.196-.126.312.001.118.049.228.133.31 1.104 1.077 2.713 1.72 4.306 1.72.26 0 .522-.018.779-.052M14.108 19.147c-.083-.085-.193-.132-.315-.133-.116 0-.224.044-.306.125-1.118 1.09-2.79 1.637-4.356 1.427-.238-.034-.46.134-.494.378-.031.24.14.46.379.493.257.034.52.052.78.052 1.59 0 3.201-.644 4.306-1.72.173-.17.176-.449.006-.622M24.142 23.38c0-.55-.718-.998-1.6-.998-.88 0-1.597.447-1.597.998 0 .559.701.997 1.598.997.881 0 1.599-.447 1.599-.997M11.54 24.377c.882 0 1.6-.447 1.6-.997s-.718-.998-1.6-.998c-.881 0-1.597.447-1.597.998 0 .56.7.997 1.597.997" transform="translate(6.947 1.263)" />
                          <path d="M33.228 23.199c-.254-.181-.561-.271-.882-.256.368-1.782.624-3.56.762-5.289.383-4.808-.867-8.922-3.617-11.896C26.559 2.586 22.025.767 17.053.767c-1.247 0-2.362.122-2.998.239-.282-.148-.516-.283-.733-.425L13.27.546c-.112-.074-.268-.044-.346.07l-.334.49c-.039.056-.054.126-.039.192.013.067.053.126.11.162l.052.034c.862.566 1.803.991 2.58 1.166.858.194 1.282.606 1.459.835l.033.042c.075.095.2.122.314.068l.532-.278c.064-.034.11-.094.127-.164s.003-.145-.04-.206l-.042-.059c-.15-.209-.564-.698-1.353-1.046.274-.011.555-.019.73-.019 4.68 0 8.927 1.694 11.654 4.648 2.579 2.794 3.701 6.524 3.337 11.088-.157 1.966-.475 4.01-.944 6.081l-.05.271c-.018.092.006.186.066.258.059.072.15.115.243.115h.361c.07 0 .135-.023.193-.067l.057-.044c.22-.168.494-.218.641-.113.315.222.313 1.023-.004 1.992 0 0-.742 2.29-.982 3-.36 1.064-1.001 1.786-1.732 1.959l.014-.035.021-.049c.041-.094.082-.19.123-.29.029-.077.027-.164-.005-.24-.033-.075-.096-.137-.174-.168l-.41-.16c-.16-.06-.342.02-.405.176-1.77 4.445-3.984 7.807-6.97 10.58-1.61 1.496-3.177 1.803-5.035 1.803s-3.425-.307-5.035-1.804c-2.986-2.772-5.2-6.134-6.97-10.579-.064-.16-.242-.237-.407-.176l-.408.16c-.078.03-.141.092-.174.17-.032.075-.033.163-.002.24.046.117.094.228.142.34.005.01.009.018.012.028-.74-.174-1.366-.882-1.73-1.956-.239-.706-.981-3-.981-3-.318-.969-.32-1.77-.005-1.992.153-.108.417-.056.664.13l.067.044c.057.034.119.054.189.047.153-.016.594-.062.615-.067.368-.094.729-.41.989-.873.413-.734.708-1.8 1.05-3.033.68-2.47 1.53-5.543 3.728-6.93 2.467-1.555 4.598-1.28 7.064-.961 2.378.306 5.073.653 8.572-.566l.03.02c.266 1.903 1.466 4.403 4.046 5.747.216.11.481.026.592-.187.055-.104.065-.223.03-.336-.035-.112-.112-.203-.217-.257-2.373-1.237-3.417-3.535-3.602-5.273-.014-.132-.09-.253-.202-.325l-.386-.246c-.117-.073-.257-.09-.385-.042-3.407 1.234-6.048.893-8.377.591-2.522-.322-4.904-.627-7.635 1.092-2.484 1.567-3.384 4.822-4.11 7.45-.324 1.172-.604 2.185-.964 2.824-.121.216-.242.33-.322.39-.429-1.955-.721-3.885-.869-5.739-.74-9.28 4.832-13.022 8.22-14.426l.019-.008c.414.18.802.312 1.154.39.857.194 1.28.606 1.458.836l.032.04c.072.095.203.124.315.07l.53-.278c.065-.033.111-.093.129-.164.018-.071.004-.147-.04-.207l-.042-.058c-.213-.297-.847-1.019-2.14-1.311-.65-.146-1.458-.513-2.214-1.007l-.05-.033c-.112-.077-.269-.047-.349.068l-.333.49c-.038.056-.054.125-.04.193.013.066.053.125.11.163l.053.033c.078.05.159.1.238.147C3.4 5.218.446 10.732.998 17.655c.137 1.714.392 3.492.761 5.288-.319-.017-.629.076-.881.255-.437.309-1.07 1.135-.393 3.195 0 0 .742 2.29.984 3.009.679 2.01 2.043 2.727 3.093 2.727.04 0 .077-.003.12-.007 1.733 3.899 3.833 6.917 6.608 9.494 1.975 1.836 3.936 2.09 5.762 2.09 1.826 0 3.788-.254 5.763-2.09 2.774-2.577 4.875-5.596 6.609-9.494.039.004.08.007.119.007 1.05 0 2.415-.717 3.093-2.728.263-.779.983-3.006.983-3.006.677-2.062.045-2.888-.391-3.196" transform="translate(6.947 1.263)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </Col>
                <Col xl="2" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "rgb(255 155 87 / 63%)" }}>
                  <div>
                    <Temp3 className="display-6" style={{ textAlign: 'center' }}>
                      {AqiCN}
                    </Temp3>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      ??o ta??i {ketquaAQI?.data?.city?.name}
                    </DesTemp2>
                  </div>
                </Col>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "rgb(255 155 87 / 63%)" }}>
                  <div>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      Kh??ng la??nh ma??nh cho nho??m ng??????i nha??y ca??m
                                            </DesTemp2>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      PM2.5 | {ketquaAQI?.data?.iaqi?.pm25?.v} ug/m3
                                            </DesTemp2>
                  </div>
                </Col>
              </>
            )
          case (151 <= AqiCN) && (AqiCN <= 200):
            return (
              <>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#e84b50" }}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48">
                      <g fill="none">
                        <path d="M0 48L48 48 48 0 0 0z" />
                        <g fill="#942431">
                          <path d="M25.18 20.458c0-.242-.197-.44-.438-.44h-4.396c-.243 0-.44.198-.44.44 0 .243.197.44.44.44h4.396c.241 0 .438-.197.438-.44M20.945 23.38c0 .56.701.997 1.597.997.883 0 1.6-.447 1.6-.997s-.717-.999-1.6-.999c-.88 0-1.597.449-1.597 1M14.178 20.458c0-.242-.197-.44-.44-.44H9.344c-.242 0-.44.198-.44.44 0 .243.198.44.44.44h4.396c.242 0 .439-.197.439-.44M9.942 23.38c0 .56.701.997 1.598.997.882 0 1.6-.447 1.6-.997s-.718-.999-1.6-.999c-.88 0-1.598.449-1.598 1M20.758 32.439h-7.41c-.243 0-.44.197-.44.44s.197.44.44.44h7.41c.243 0 .44-.197.44-.44s-.197-.44-.44-.44M20.758 34.65h-7.41c-.243 0-.44.198-.44.44 0 .243.197.44.44.44h7.41c.243 0 .44-.197.44-.44 0-.242-.197-.44-.44-.44M20.758 36.863h-7.41c-.243 0-.44.197-.44.44 0 .242.197.44.44.44h7.41c.243 0 .44-.198.44-.44 0-.243-.197-.44-.44-.44" transform="translate(6.947 1.263)" />
                          <path d="M4.54 31.074c-.14-.015-.257-.036-.35-.06l-.026-.008c-.423-.116-1.203-.521-1.683-1.945-.25-.74-.453-1.371-.634-1.927L1.5 26.06c-.317-.969-.32-1.77-.005-1.992.052-.037.121-.055.198-.055.14 0 .305.059.441.168.096.075.12.132.126.151.479 1.84 1.23 4.11 2.009 6.075l.273.666zm12.513 11.564c-1.859 0-3.426-.307-5.036-1.803-2.594-2.41-4.573-5.224-6.226-8.852.528-.025 1.255-.146 2.272-.732.932-.536 1.775-1.073 2.59-1.594l.049-.03c2.356-1.505 4.216-2.693 6.35-2.694 2.135.001 3.996 1.189 6.356 2.696.827.528 1.682 1.074 2.634 1.622 1.018.586 1.745.707 2.272.732-1.653 3.629-3.632 6.443-6.225 8.852-1.61 1.496-3.178 1.803-5.036 1.803zm15.554-16.576l-.349 1.072c-.18.557-.383 1.187-.633 1.927-.48 1.424-1.26 1.83-1.687 1.947l-.019.006c-.094.025-.213.045-.354.06l.272-.666c.78-1.965 1.531-4.234 2.008-6.07.015-.047.058-.1.128-.156.132-.105.296-.168.44-.168.078 0 .147.02.198.056.315.222.312 1.022-.004 1.992zm.62-2.863c-.25-.18-.563-.268-.881-.256.367-1.781.624-3.56.761-5.29.384-4.807-.866-8.921-3.616-11.895-2.932-3.172-7.466-4.99-12.438-4.99-1.247 0-2.362.122-2.998.238-.282-.148-.516-.284-.733-.425L13.27.547c-.113-.075-.269-.045-.347.068l-.333.491c-.039.055-.053.125-.04.192.013.067.053.127.11.163l.053.034c.862.566 1.804.99 2.581 1.166.857.192 1.28.605 1.458.834l.033.042c.073.094.202.123.314.068l.532-.278c.064-.034.11-.094.127-.164s.003-.145-.04-.206l-.042-.058c-.15-.21-.564-.698-1.353-1.048.274-.01.556-.018.73-.018 4.68 0 8.927 1.694 11.654 4.648 2.579 2.793 3.702 6.524 3.337 11.09-.162 2.018-.479 4.062-.942 6.074-.467 2.023-1.541 5.224-2.505 7.466h-.037c-.62 0-1.197-.113-2.08-.623-.944-.543-1.787-1.081-2.605-1.604-2.376-1.517-4.428-2.828-6.826-2.831-2.388.002-4.442 1.313-6.82 2.832-.817.522-1.66 1.06-2.604 1.604-.882.507-1.476.622-2.08.622H5.51c-.866-2.011-1.816-4.778-2.379-6.92.332-.12.653-.424.888-.84.414-.736.708-1.8 1.05-3.034.68-2.47 1.53-5.543 3.728-6.93 2.467-1.555 4.598-1.28 7.065-.961 2.377.306 5.07.653 8.571-.566l.03.02c.267 1.903 1.467 4.403 4.046 5.747.216.109.48.025.592-.187.055-.103.065-.223.03-.336-.035-.112-.112-.203-.217-.257-2.373-1.237-3.416-3.536-3.602-5.273-.014-.132-.09-.253-.202-.325l-.386-.245c-.116-.074-.256-.09-.385-.043-3.407 1.234-6.047.892-8.377.59-2.522-.321-4.905-.627-7.635 1.094-2.485 1.566-3.384 4.822-4.11 7.448-.324 1.173-.604 2.186-.964 2.825-.122.216-.242.33-.322.39-.429-1.952-.721-3.882-.87-5.738-.74-9.28 4.833-13.022 8.22-14.428l.02-.007c.414.18.802.311 1.154.39.857.194 1.281.606 1.458.836l.032.04c.073.095.203.124.315.07l.53-.278c.065-.033.111-.093.129-.164.018-.071.004-.147-.04-.206l-.042-.06c-.213-.296-.847-1.018-2.14-1.31-.65-.146-1.458-.513-2.214-1.007l-.05-.033c-.113-.076-.269-.047-.349.068l-.333.49c-.038.055-.053.126-.04.193.013.066.053.125.11.162l.053.034c.078.051.159.1.238.147C3.4 5.218.446 10.732.998 17.654c.136 1.714.392 3.493.761 5.29-.316-.012-.628.075-.881.254-.437.31-1.07 1.135-.393 3.195 0 0 .722 2.232.984 3.01.679 2.01 2.043 2.726 3.093 2.726.04 0 .078-.003.12-.007 1.735 3.9 3.835 6.919 6.608 9.496 1.975 1.834 3.937 2.088 5.763 2.088 1.825 0 3.788-.254 5.763-2.09 2.772-2.576 4.873-5.594 6.608-9.494.04.004.079.007.12.007 1.05 0 2.414-.716 3.092-2.727.26-.77.983-3.007.983-3.007.677-2.062.045-2.887-.391-3.196z" transform="translate(6.947 1.263)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </Col>
                <Col xl="2" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#fe6a6982" }}>
                  <div>
                    <Temp3 className="display-6" style={{ textAlign: 'center' }}>
                      {AqiCN}
                    </Temp3>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      ??o ta??i {ketquaAQI?.data?.city?.name}
                    </DesTemp2>
                  </div>
                </Col>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#fe6a6982" }}>
                  <div>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      Co?? ha??i cho s????c kho??e
                                            </DesTemp2>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      PM2.5 | {ketquaAQI?.data?.iaqi?.pm25?.v} ug/m3
                                            </DesTemp2>
                  </div>
                </Col>
              </>
            )
          case (201 <= AqiCN) && (AqiCN <= 300):
            return (
              <>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#a87383" }}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48">
                      <g fill="none">
                        <path d="M0 48L48 48 48 0 0 0z" />
                        <g fill="#543B63">
                          <path d="M16.992 37.511c-1.157 0-2.1-.942-2.1-2.099 0-1.156.943-2.098 2.1-2.098s2.098.942 2.098 2.098c0 1.157-.941 2.099-2.098 2.099m0-5.076c-1.643 0-2.978 1.336-2.978 2.977 0 1.642 1.335 2.979 2.978 2.979 1.642 0 2.977-1.337 2.977-2.979 0-1.641-1.335-2.977-2.977-2.977" transform="translate(6.947 1.263)" />
                          <path d="M16.992 39.062c-2.013 0-3.65-1.637-3.65-3.65 0-2.011 1.637-3.648 3.65-3.648 2.012 0 3.649 1.637 3.649 3.648 0 2.013-1.637 3.65-3.65 3.65m0-8.178c-2.497 0-4.528 2.032-4.528 4.528 0 2.498 2.031 4.53 4.529 4.53 2.497 0 4.528-2.032 4.528-4.53 0-2.496-2.031-4.528-4.528-4.528" transform="translate(6.947 1.263)" />
                          <path d="M30.833 35.621c.003.011.002.023-.003.031l-4.595 8.904c-.01.02-.035.027-.055.018l-.968-.5 4.633-8.976.967.5c.01.005.017.013.02.022v.001zM3.31 35.597l.969-.498 4.632 8.976-.967.498c-.019.01-.046.002-.055-.017l-4.596-8.902c-.005-.01-.005-.022-.003-.033.004-.013.013-.02.02-.024zm4.642-1.908c.378.121.684.381.866.732l3.274 6.345c.182.35.215.752.095 1.129s-.38.685-.731.865l-1.764.911-4.633-8.976 1.764-.91c.347-.179.76-.214 1.13-.096zm13.05 7.98c-1.363.85-2.704.969-3.95.969-1.24 0-2.575-.117-3.934-.96.048-.46-.036-.914-.244-1.315l-3.275-6.344c-.022-.044-.05-.084-.078-.126 2.14-3.972 5.74-6.939 7.541-6.942 1.801.003 5.402 2.97 7.541 6.941-.027.04-.056.082-.079.126l-3.275 6.345c-.206.4-.291.85-.247 1.305zm5.62-8.05c.237 0 .465.056.678.166l1.764.91-4.633 8.976-1.764-.91c-.724-.375-1.01-1.27-.637-1.995l3.276-6.345c.18-.35.487-.61.864-.732.147-.046.3-.07.453-.07zm6.606-10.42c-.251-.18-.56-.27-.882-.256.368-1.782.624-3.56.762-5.29.383-4.808-.868-8.921-3.617-11.896-2.932-3.17-7.466-4.99-12.438-4.99-1.247 0-2.362.122-2.998.238-.282-.147-.516-.283-.733-.424L13.27.547c-.113-.075-.267-.044-.346.069l-.334.49c-.039.055-.054.125-.04.191.013.068.053.127.11.164l.053.033c.862.566 1.803.991 2.58 1.167.858.192 1.282.605 1.459.834l.033.042c.073.094.202.123.314.068l.532-.277c.064-.035.11-.095.127-.165s.003-.145-.04-.206l-.042-.059c-.15-.209-.564-.698-1.353-1.046.274-.012.555-.02.73-.02 4.68 0 8.927 1.695 11.654 4.65 2.579 2.792 3.701 6.523 3.337 11.088-.157 1.965-.475 4.01-.944 6.08l-.05.27c-.018.093.006.188.066.259.059.073.147.115.243.115h.361c.07 0 .135-.023.193-.066l.057-.044c.22-.169.493-.219.641-.115.315.223.313 1.024-.004 1.994 0 0-.732 2.258-.982 2.998-.36 1.064-1 1.787-1.732 1.96l.015-.037c.047-.11.096-.22.143-.336.03-.08.028-.164-.005-.24-.033-.076-.096-.137-.174-.169l-.41-.16c-.16-.06-.342.02-.405.177-.38.956-.792 1.876-1.25 2.8l-.103-.052c-.561-.29-1.2-.344-1.8-.151-.246.078-.475.194-.68.345-.966-1.708-2.354-3.452-3.817-4.795-1.633-1.5-3.177-2.328-4.348-2.331-1.165.003-2.707.831-4.341 2.331-1.463 1.344-2.85 3.088-3.817 4.796-.206-.152-.435-.268-.682-.346-.6-.192-1.24-.139-1.799.15l-.107.056-.022-.028c-.466-.935-.872-1.843-1.244-2.775-.064-.16-.242-.238-.407-.177l-.409.16c-.077.032-.14.093-.173.168-.033.077-.034.162-.003.242.039.098.08.191.12.285l.018.045.017.038c-.74-.174-1.366-.881-1.73-1.956-.238-.706-.981-3-.981-3-.318-.969-.32-1.769-.005-1.992.152-.108.417-.055.664.131l.067.042c.057.036.12.053.189.048.154-.011.593-.062.615-.067.368-.092.729-.41.989-.872.414-.736.708-1.8 1.05-3.034.68-2.47 1.53-5.543 3.728-6.929 2.467-1.556 4.598-1.28 7.064-.962 2.378.306 5.073.653 8.572-.566l.03.02c.266 1.903 1.466 4.403 4.046 5.747.215.11.482.025.592-.187.055-.104.065-.223.03-.336-.035-.112-.112-.203-.217-.257-2.373-1.237-3.417-3.535-3.602-5.274-.014-.13-.09-.253-.202-.324l-.386-.246c-.116-.073-.257-.09-.385-.042-3.406 1.234-6.046.892-8.377.591-2.522-.322-4.904-.627-7.635 1.093-2.485 1.566-3.384 4.821-4.11 7.448-.324 1.173-.604 2.186-.964 2.825-.122.217-.245.333-.322.39-.43-1.956-.721-3.886-.87-5.738-.74-9.28 4.833-13.022 8.22-14.427l.02-.009c.414.181.802.312 1.154.392.857.193 1.28.606 1.458.834l.032.041c.073.095.203.123.315.07l.53-.278c.065-.033.111-.093.129-.164.018-.071.004-.147-.04-.206l-.042-.059c-.213-.297-.847-1.019-2.14-1.311-.65-.147-1.458-.514-2.214-1.007l-.051-.033c-.112-.076-.268-.046-.348.068l-.333.49c-.038.056-.054.126-.04.193.013.066.053.125.11.163l.053.032c.078.052.159.101.238.148C3.4 5.22.446 10.732.998 17.654c.137 1.714.392 3.494.761 5.29-.319-.019-.629.075-.881.254-.437.31-1.07 1.135-.393 3.195 0 0 .722 2.232.984 3.009.679 2.01 2.043 2.727 3.093 2.727.04 0 .077-.003.118-.007.18.405.375.818.594 1.26L2.82 34.649c-.543.28-.757.951-.477 1.495l4.596 8.904c.192.37.57.6.987.6.178 0 .348-.042.507-.124l3.512-1.814c.405-.207.744-.52.986-.903 1.457.79 2.841.9 4.121.9 1.222 0 2.666-.11 4.134-.908.241.387.583.701.992.911l3.512 1.814c.156.081.332.124.507.124.417 0 .796-.23.987-.6l4.595-8.904c.28-.543.067-1.213-.476-1.495l-2.469-1.273c.213-.43.406-.841.59-1.253.039.004.079.007.119.007 1.05 0 2.415-.716 3.093-2.727.26-.77.983-3.007.983-3.007.677-2.062.045-2.888-.391-3.196z" transform="translate(6.947 1.263)" />
                          <path d="M25.18 20.459c0-.243-.197-.44-.438-.44h-4.396c-.243 0-.44.197-.44.44 0 .242.197.44.44.44h4.396c.241 0 .438-.198.438-.44M20.945 23.38c0 .56.701.997 1.597.997.883 0 1.6-.447 1.6-.997s-.717-.998-1.6-.998c-.88 0-1.597.448-1.597.998M14.178 20.459c0-.243-.197-.44-.44-.44H9.344c-.242 0-.44.197-.44.44 0 .242.198.44.44.44h4.396c.242 0 .439-.198.439-.44M9.942 23.38c0 .56.701.997 1.598.997.882 0 1.6-.447 1.6-.997s-.718-.998-1.6-.998c-.88 0-1.598.448-1.598.998" transform="translate(6.947 1.263)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </Col>
                <Col xl="2" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#a97abc8a" }}>
                  <div>
                    <Temp3 className="display-6" style={{ textAlign: 'center' }}>
                      {AqiCN}
                    </Temp3>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      ??o ta??i {ketquaAQI?.data?.city?.name}
                    </DesTemp2>
                  </div>
                </Col>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#a97abc8a" }}>
                  <div>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      R????t co?? ha??i cho s????c kho??e
                                            </DesTemp2>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      PM2.5 | {ketquaAQI?.data?.iaqi?.pm25?.v} ug/m3
                                            </DesTemp2>
                  </div>
                </Col>
              </>
            )
          case (301 <= AqiCN) && (AqiCN <= 500):
            return (
              <>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#915c6c" }}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48">
                      <g fill="none">
                        <path d="M0 48L48 48 48 0 0 0z" />
                        <g fill="#573344">
                          <path d="M22.763 20.682c1.048 0 1.901 1.163 1.901 2.592s-.853 2.591-1.9 2.591c-1.05 0-1.902-1.162-1.902-2.59 0-1.43.853-2.593 1.901-2.593m0 6.063c1.533 0 2.78-1.557 2.78-3.47 0-1.915-1.247-3.473-2.78-3.473-1.532 0-2.78 1.558-2.78 3.472s1.248 3.47 2.78 3.47M11.341 20.682c1.048 0 1.901 1.163 1.901 2.592s-.853 2.591-1.9 2.591c-1.05 0-1.902-1.162-1.902-2.59 0-1.43.853-2.593 1.901-2.593m0 6.063c1.533 0 2.78-1.557 2.78-3.47 0-1.915-1.247-3.473-2.78-3.473-1.533 0-2.78 1.558-2.78 3.472s1.247 3.47 2.78 3.47M13.438 38.11c.97-.535 2.27-.84 3.615-.84 1.344 0 2.645.305 3.614.84h-7.229zM11.9 39.856c.067-.299.216-.59.443-.866h9.422c.227.276.375.567.442.866H11.899zm8.496 2.627c-.938.452-2.113.699-3.342.699-1.23 0-2.405-.247-3.341-.7h6.683zm1.774-1.747c-.094.303-.27.595-.526.867h-9.181c-.255-.272-.431-.564-.526-.867H22.17zm-5.116 3.326c3.351 0 6.078-1.72 6.078-3.836 0-2.115-2.727-3.836-6.078-3.836-3.352 0-6.078 1.72-6.078 3.836 0 2.115 2.726 3.836 6.078 3.836z" transform="translate(6.947 1.263)" />
                          <path d="M10.855 36.782v-.001c.256-2.14 2.99-3.824 6.224-3.833 3.234.01 5.968 1.698 6.225 3.847.427 3.05.46 3.487.46 3.547 0 2.364-3 4.294-6.685 4.303-3.686-.009-6.685-1.94-6.685-4.303 0-.061.032-.498.461-3.56m6.223-21.486c5.05.007 9.128 2.143 10.15 5.314 1.197 3.725-1.382 9.431-4.482 13.459-1.346-1.245-3.448-1.994-5.641-2.006h-.053c-2.193.012-4.295.76-5.64 2.006-3.1-4.028-5.68-9.734-4.483-13.46 1.022-3.17 5.1-5.306 10.15-5.313m16.149 7.903c-.236-.168-.524-.257-.823-.257l-.059.001c.367-1.781.624-3.56.761-5.289.384-4.808-.866-8.922-3.616-11.896C26.559 2.586 22.025.767 17.053.767c-1.247 0-2.362.122-2.998.239-.282-.148-.516-.283-.733-.426L13.27.546c-.113-.074-.269-.043-.347.07l-.333.49c-.039.056-.053.125-.04.191.013.068.053.127.11.163l.053.034c.864.566 1.805.991 2.581 1.166.857.194 1.28.606 1.458.835l.033.042c.074.094.204.121.314.068l.532-.278c.064-.033.11-.094.127-.163.018-.072.004-.147-.04-.207l-.042-.059c-.15-.209-.564-.698-1.353-1.046.274-.012.555-.02.73-.02 4.68 0 8.927 1.695 11.654 4.649 2.578 2.793 3.7 6.524 3.337 11.089-.157 1.965-.475 4.01-.943 6.08l-.052.271c-.017.092.007.186.067.258.06.072.15.115.243.115h.361c.07 0 .135-.023.193-.066l.057-.045c.22-.168.495-.217.641-.113.315.222.312 1.023-.005 1.992 0 0-.748 2.307-.981 3-.36 1.064-1.001 1.786-1.732 1.959l.014-.035.021-.048c.041-.095.082-.19.123-.29.028-.078.027-.165-.005-.24-.033-.076-.096-.138-.175-.169l-.408-.16c-.16-.06-.341.019-.406.177-1.267 3.18-2.788 5.828-4.647 8.091-.065-.474-.14-1.03-.23-1.671-.082-.678-.36-1.332-.829-1.943 3.298-4.237 6.03-10.318 4.717-14.395-1.138-3.537-5.554-5.919-10.99-5.927-5.435.008-9.851 2.39-10.989 5.927-1.312 4.076 1.419 10.158 4.716 14.394-.468.613-.747 1.266-.826 1.94-.094.666-.173 1.24-.238 1.727-1.883-2.278-3.42-4.944-4.694-8.144-.066-.16-.244-.237-.407-.176l-.407.16c-.079.03-.142.093-.175.17-.032.075-.033.163-.003.24.046.116.095.228.143.34.004.009.009.018.012.028-.74-.174-1.367-.882-1.73-1.956-.239-.706-.98-3-.98-3-.319-.969-.32-1.77-.006-1.992.152-.107.417-.056.664.131l.067.043c.058.035.12.052.189.047.154-.011.594-.062.614-.067.368-.094.73-.41.99-.873.414-.734.708-1.8 1.05-3.033.68-2.47 1.53-5.543 3.728-6.93 2.467-1.555 4.598-1.28 7.065-.96 2.379.305 5.073.652 8.571-.567l.03.02c.267 1.903 1.467 4.403 4.046 5.747.216.108.481.025.592-.187.055-.104.065-.223.03-.336-.035-.111-.112-.203-.217-.257-2.373-1.237-3.416-3.535-3.602-5.273-.014-.132-.09-.254-.202-.326l-.386-.245c-.118-.073-.257-.09-.385-.042-3.407 1.234-6.048.893-8.377.591-2.522-.322-4.906-.627-7.635 1.092-2.484 1.567-3.384 4.822-4.11 7.45-.324 1.172-.604 2.185-.964 2.824-.12.216-.242.33-.322.39-.43-1.955-.721-3.885-.869-5.738-.74-9.281 4.832-13.023 8.22-14.427l.02-.008c.413.18.801.312 1.153.39.857.194 1.28.606 1.458.835l.032.04c.073.096.203.124.315.07l.532-.278c.064-.034.11-.094.127-.163.018-.071.003-.147-.04-.207l-.042-.058c-.213-.297-.847-1.02-2.14-1.31-.65-.147-1.458-.514-2.214-1.008l-.05-.033c-.113-.076-.269-.046-.349.068l-.333.49c-.039.056-.053.126-.04.193.013.067.053.126.11.162l.053.034c.078.051.159.1.238.147C3.4 5.218.446 10.732.998 17.655c.136 1.713.392 3.492.761 5.288-.317-.014-.628.076-.881.255-.437.309-1.07 1.135-.393 3.195 0 0 .742 2.29.984 3.009.679 2.01 2.043 2.727 3.093 2.727.04 0 .077-.003.12-.007 1.332 2.998 2.928 5.519 4.875 7.705-.032.282-.047.446-.047.515 0 2.841 3.383 5.168 7.543 5.188h.052c4.159-.02 7.542-2.347 7.542-5.188 0-.074-.016-.255-.054-.568 1.927-2.175 3.508-4.678 4.83-7.652.04.004.08.007.12.007 1.05 0 2.415-.716 3.093-2.728.263-.779.983-3.006.983-3.006.677-2.062.046-2.888-.391-3.196" transform="translate(6.947 1.263)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </Col>
                <Col xl="2" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#a87383b3" }}>
                  <div>
                    <Temp3 className="display-6" style={{ textAlign: 'center' }}>
                      {AqiCN}
                    </Temp3>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      ??o ta??i {ketquaAQI?.data?.city?.name}
                    </DesTemp2>
                  </div>
                </Col>
                <Col xl="1" sm="4" className="d-flex align-items-center justify-content-center col-4" style={{ backgroundColor: "#a87383b3" }}>
                  <div>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      Nguy hi????m
                                            </DesTemp2>
                    <DesTemp2 className="display-6" style={{ textAlign: 'center' }}>
                      PM2.5 | {ketquaAQI?.data?.iaqi?.pm25?.v} ug/m3
                                            </DesTemp2>
                  </div>
                </Col>
              </>
            )
          default:
            return null;
        }
      } catch (error) {
        return null;
      }
    }
    else {
      return null;
    }
  }
  return (
   
    <>
    {ketquaAQI.status === "error" ?  null :   <Col xl="12" className="d-flex justify-content-start rounded">
                  <h4 className="headerTitle"><Heading color="secondary">AQI (Ch????t l??????ng kh??ng khi??)</Heading></h4>
                </Col>}
   
      {trangthai === "thanhcong" ? renderIcon() :  <Skeleton/>}
    </>
  )
}
descriptionAQI.propTypes = {
  PropTypes: PropTypes.shape({
    data: PropTypes.shape({
      aqi: PropTypes.string,
      city: PropTypes.shape({
        name: PropTypes.string
      }),
      iaqi: PropTypes.shape({
        pm25: PropTypes.shape({
          v: PropTypes.string
        })
      })
    })
  })
}
export default descriptionAQI
