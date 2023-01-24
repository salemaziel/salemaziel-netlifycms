import React from "react"

import MeStripedShirt from '../../../assets/images/me-striped-shirt-585x780.jpg';

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"

import Fade from "react-reveal/Fade"

//import './sectionInfo.module.css'

import "./sectionInfo.scss"

const SectionInfo = () => (
  <>
    <section className="three">
      <div className="arlo_tm_section" id="about">
        <div className="arlo_tm_about_wrap_all">
          <div className="arlo_tm_about">
            <div className="container">
              {/*<div className="arlo_title_holder">
                <span>Biography</span>
                <h3>A Little About Me</h3>
              </div>*/}
              <div className="about_inner">
                <div className="leftbox">
                  {/*<div className="about_image_wrap parallax" data-relative-input="true" style={{transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
              <div className="image layer" data-depth="0.1" style={{transform: 'translate3d(-10.3867px, 7.13708px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'relative', display: 'block', left: 0, top: 0}}>
                <img src="img/about/550x650.jpg" alt />
                <div className="inner" /*data-img-url="img/about/2.jpg" style={{backgroundImage: 'url("img/about/2.jpg")'}}* / />
              </div>
              <div className="border layer" data-depth="0.2" style={{transform: 'translate3d(-20.7733px, 14.2742px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', position: 'absolute', display: 'block', left: 0, top: 0}}>
                <img src="img/about/550x650.jpg" alt />
                <div className="inner" />
              </div>
          </div>*/}
                <Fade top>
                  <div className="image fit">
                    <img src={MeStripedShirt} alt="" className="picShadow"/>
                  </div>
                  </Fade>
                </div>
                
                <div className="rightbox">
                  {/*<div className="about_title">
              <h3>I'm Albert Walkers and <span className="arlo_tm_animation_text_word">Web Developer</span><span className="typed-cursor" /></h3>
        </div>*/}
                  <div className="text">
                    <Fade top>
                    <p>
                      My name is <strong>Salem Aziel</strong>.
                      <br />I am a Web Developer, Digital Consultant, and System
                      Administrator.
                    </p>
                    </Fade>
                  </div>
                  <div className="about_short_contact_wrap">
                    <Fade top cascade>
                    <ul>
                      {/*<li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <g>
                              <path d="M32,271.692v192c0,17.664,14.368,32,32,32h160v-224H32z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M480,143.692H378.752c7.264-4.96,13.504-9.888,17.856-14.304c25.824-25.952,25.824-68.192,0-94.144    c-25.088-25.28-68.8-25.216-93.856,0c-13.888,13.92-50.688,70.592-45.6,108.448h-2.304c5.056-37.856-31.744-94.528-45.6-108.448    c-25.088-25.216-68.8-25.216-93.856,0C89.6,61.196,89.6,103.436,115.36,129.388c4.384,4.416,10.624,9.344,17.888,14.304H32    c-17.632,0-32,14.368-32,32v48c0,8.832,7.168,16,16,16h208v-64h64v64h208c8.832,0,16-7.168,16-16v-48    C512,158.06,497.664,143.692,480,143.692z M222.112,142.636c0,0-1.344,1.056-5.92,1.056c-22.112,0-64.32-22.976-78.112-36.864    c-13.408-13.504-13.408-35.52,0-49.024c6.496-6.528,15.104-10.112,24.256-10.112c9.12,0,17.728,3.584,24.224,10.112    C208.128,79.5,229.568,134.924,222.112,142.636z M295.776,143.692c-4.544,0-5.888-1.024-5.888-1.056    c-7.456-7.712,13.984-63.136,35.552-84.832c12.896-13.024,35.456-13.088,48.48,0c13.44,13.504,13.44,35.52,0,49.024    C360.128,120.716,317.92,143.692,295.776,143.692z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M288,271.692v224h160c17.664,0,32-14.336,32-32v-192H288z" />
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                        <span>
                          <label>Birthday:</label> 01.07.1990
                        </span>
                      </li>*/}
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          width="511.634px"
                          height="511.634px"
                          viewBox="0 0 511.634 511.634"
                          style={{
                            enableBackground: "new 0 0 511.634 511.634",
                          }}
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <path d="M482.513,83.942c-7.225-7.233-15.797-10.85-25.694-10.85h-36.541v-27.41c0-12.56-4.477-23.315-13.422-32.261   C397.906,4.475,387.157,0,374.591,0h-18.268c-12.565,0-23.318,4.475-32.264,13.422c-8.949,8.945-13.422,19.701-13.422,32.261v27.41   h-109.63v-27.41c0-12.56-4.475-23.315-13.422-32.261C178.64,4.475,167.886,0,155.321,0H137.05   c-12.562,0-23.317,4.475-32.264,13.422c-8.945,8.945-13.421,19.701-13.421,32.261v27.41H54.823c-9.9,0-18.464,3.617-25.697,10.85   c-7.233,7.232-10.85,15.8-10.85,25.697v365.453c0,9.89,3.617,18.456,10.85,25.693c7.232,7.231,15.796,10.849,25.697,10.849h401.989   c9.897,0,18.47-3.617,25.694-10.849c7.234-7.234,10.852-15.804,10.852-25.693V109.639   C493.357,99.739,489.743,91.175,482.513,83.942z M137.047,475.088H54.823v-82.23h82.224V475.088z M137.047,374.59H54.823v-91.358   h82.224V374.59z M137.047,264.951H54.823v-82.223h82.224V264.951z M130.627,134.333c-1.809-1.809-2.712-3.946-2.712-6.423V45.686   c0-2.474,0.903-4.617,2.712-6.423c1.809-1.809,3.946-2.712,6.423-2.712h18.271c2.474,0,4.617,0.903,6.423,2.712   c1.809,1.807,2.714,3.949,2.714,6.423v82.224c0,2.478-0.909,4.615-2.714,6.423c-1.807,1.809-3.946,2.712-6.423,2.712H137.05   C134.576,137.046,132.436,136.142,130.627,134.333z M246.683,475.088h-91.365v-82.23h91.365V475.088z M246.683,374.59h-91.365   v-91.358h91.365V374.59z M246.683,264.951h-91.365v-82.223h91.365V264.951z M356.323,475.088h-91.364v-82.23h91.364V475.088z    M356.323,374.59h-91.364v-91.358h91.364V374.59z M356.323,264.951h-91.364v-82.223h91.364V264.951z M349.896,134.333   c-1.807-1.809-2.707-3.946-2.707-6.423V45.686c0-2.474,0.9-4.617,2.707-6.423c1.808-1.809,3.949-2.712,6.427-2.712h18.268   c2.478,0,4.617,0.903,6.427,2.712c1.808,1.807,2.707,3.949,2.707,6.423v82.224c0,2.478-0.903,4.615-2.707,6.423   c-1.807,1.809-3.949,2.712-6.427,2.712h-18.268C353.846,137.046,351.697,136.142,349.896,134.333z M456.812,475.088h-82.228v-82.23   h82.228V475.088z M456.812,374.59h-82.228v-91.358h82.228V374.59z M456.812,264.951h-82.228v-82.223h82.228V264.951z" />
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                        <span>
                          <label>Age:</label> 28
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <g>
                              <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z" />
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                        <span>
                          <label>Location:</label> California, USA
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="512pt"
                          viewBox="0 -104 512.00085 512"
                          width="512pt"
                          className="svg replaced-svg"
                        >
                          <path
                            d="m510.296875 225.53125-34.320313-145.84375c-9.242187-39.289062-45.457031-79.6875-100.605468-79.6875h-238.738282c-40.363281 0-87.980468 26.003906-100.609374 79.6875l-34.320313 145.84375c-9.316406 39.589844 20.734375 77.570312 61.457031 77.570312 17.304688 0 33.582032-9.21875 42.476563-24.050781l26.4375-44.054687c4.519531-7.539063 12.785156-12.21875 21.574219-12.21875h204.699218c8.789063 0 17.058594 4.683594 21.578125 12.222656l26.433594 44.046875c8.898437 14.835937 25.175781 24.054687 42.5 24.054687 40.660156 0 70.761719-37.941406 61.4375-77.570312zm-318.554687-99.144531h-17.132813v17.132812c0 8.28125-6.714844 14.996094-15 14.996094-8.28125 0-14.996094-6.714844-14.996094-14.996094v-17.132812h-17.132812c-8.28125 0-14.996094-6.714844-14.996094-14.996094 0-8.285156 6.714844-15 14.996094-15h17.132812v-17.132813c0-8.28125 6.714844-14.996093 14.996094-14.996093 8.285156 0 15 6.714843 15 14.996093v17.132813h17.132813c8.28125 0 14.996093 6.714844 14.996093 15 0 8.28125-6.714843 14.996094-14.996093 14.996094zm128.515624 0c-8.277343 0-14.996093-6.71875-14.996093-14.996094 0-8.28125 6.722656-15 14.996093-15 8.28125 0 15 6.71875 15 15 0 8.277344-6.71875 14.996094-15 14.996094zm32.132813 32.128906c-8.277344 0-15-6.71875-15-14.996094 0-8.277343 6.722656-15 15-15s14.996094 6.722657 14.996094 15c0 8.277344-6.71875 14.996094-14.996094 14.996094zm0-64.257813c-8.277344 0-15-6.71875-15-15 0-8.277343 6.722656-14.996093 15-14.996093s14.996094 6.71875 14.996094 14.996093c0 8.28125-6.71875 15-14.996094 15zm32.128906 32.128907c-8.277343 0-15-6.71875-15-14.996094 0-8.28125 6.722657-15 15-15 8.277344 0 14.996094 6.71875 14.996094 15 0 8.277344-6.71875 14.996094-14.996094 14.996094zm0 0"
                            fillRule="evenodd"
                          />
                        </svg>
                        <span>
                          <label>Interests:</label> Reading, Hiking, Breaking
                          &amp; Fixing Computers, Drawing, Skydiving,
                          Philosophy, Eating
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <g>
                              <path d="M256,0c-49.629,0-90,41.371-90,91c0,49.629,40.371,90,90,90c49.629,0,90-40.371,90-90C346,41.371,305.629,0,256,0z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M286,181h-30h-30c-21.158,0-41.603,5.469-60.19,14.773c31.569,8.518,61.293,20.786,90.19,37.372    c28.898-16.586,58.621-28.854,90.19-37.372C327.603,186.469,307.158,181,286,181z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M482,271c-16.569,0-30,13.431-30,30v60c0,16.567,13.431,30,30,30c16.569,0,30-13.433,30-30v-60    C512,284.431,498.569,271,482,271z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M30,271c-16.569,0-30,13.431-30,30v60c0,16.567,13.431,30,30,30c16.569,0,30-13.433,30-30v-60    C60,284.431,46.569,271,30,271z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M45,211c-8.291,0-15,6.709-15,15v15c33.091,0,60,26.909,60,60v60c0,33.091-26.909,60-60,60v15c0,8.291,6.709,15,15,15    c76.901,0,138.39,24.286,196,61V259.594C183.13,226.414,120.903,211,45,211z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M482,241v-15c0-8.291-6.709-15-15-15c-75.903,0-138.13,15.414-196,48.594V512c57.61-36.714,119.099-61,196-61    c8.291,0,15-6.709,15-15v-15c-33.091,0-60-26.909-60-60v-60C422,267.909,448.909,241,482,241z" />
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                        <label>Study:</label>{" "}
                        {/*<a className="href_location" href="#">*/}{" "}
                        <span>
                          <br />
                          University of California, <br /> Santa Barbara
                          {/*</a>*/}
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          width="791.803px"
                          height="791.803px"
                          viewBox="0 0 791.803 791.803"
                          style={{
                            enableBackground: "new 0 0 791.803 791.803",
                          }}
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <path d="M395.904,475.016l-236.203-72.7v71.524v49.896c0,56.133,105.787,101.644,236.274,101.644   c130.48,0,236.285-45.511,236.285-101.644c0-0.442-0.145-0.886-0.154-1.318V402.316L395.904,475.016z" />
                            <path d="M0,318.734l84.383,30.185l7.191-15.401l31-2.635l4.42,4.599l-26.601,6.308l-3.877,11.475   c-0.007,0-60.087,125.604-51.263,187.05c0,0,37.502,22.37,74.988,0l9.962-168v-13.984l55.8-12.588l-3.941,9.705l-41.604,13.529   l19.242,6.874l236.203,72.7l236.201-72.7l159.699-57.116l-395.9-152.313L0,318.734z" />
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                        <span>
                          <label>Degree:</label> Psychology, B.S.
                        </span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          width="550.795px"
                          height="550.795px"
                          viewBox="0 0 550.795 550.795"
                          style={{
                            enableBackground: "new 0 0 550.795 550.795",
                          }}
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <g>
                              <path d="M501.613,491.782c12.381,0,23.109-4.088,32.229-12.16L377.793,323.567c-3.744,2.681-7.373,5.288-10.801,7.767    c-11.678,8.604-21.156,15.318-28.434,20.129c-7.277,4.822-16.959,9.737-29.045,14.755c-12.094,5.024-23.361,7.528-33.813,7.528    h-0.306h-0.306c-10.453,0-21.72-2.503-33.813-7.528c-12.093-5.018-21.775-9.933-29.045-14.755    c-7.277-4.811-16.75-11.524-28.434-20.129c-3.256-2.387-6.867-5.006-10.771-7.809L16.946,479.622    c9.119,8.072,19.854,12.16,32.234,12.16H501.613z" />
                              <path d="M31.047,225.299C19.37,217.514,9.015,208.598,0,198.555V435.98l137.541-137.541    C110.025,279.229,74.572,254.877,31.047,225.299z" />
                              <path d="M520.059,225.299c-41.865,28.336-77.447,52.73-106.75,73.195l137.486,137.492V198.555    C541.98,208.396,531.736,217.306,520.059,225.299z" />
                              <path d="M501.613,59.013H49.181c-15.784,0-27.919,5.33-36.42,15.979C4.253,85.646,0.006,98.97,0.006,114.949    c0,12.907,5.636,26.892,16.903,41.959c11.267,15.061,23.256,26.891,35.961,35.496c6.965,4.921,27.969,19.523,63.012,43.801    c18.917,13.109,35.368,24.535,49.505,34.395c12.05,8.396,22.442,15.667,31.022,21.701c0.985,0.691,2.534,1.799,4.59,3.269    c2.215,1.591,5.018,3.61,8.476,6.107c6.659,4.816,12.191,8.709,16.597,11.683c4.4,2.975,9.731,6.298,15.985,9.988    c6.249,3.685,12.143,6.456,17.675,8.299c5.533,1.842,10.655,2.766,15.367,2.766h0.306h0.306c4.711,0,9.834-0.924,15.368-2.766    c5.531-1.843,11.42-4.608,17.674-8.299c6.248-3.69,11.572-7.02,15.986-9.988c4.406-2.974,9.938-6.866,16.598-11.683    c3.451-2.497,6.254-4.517,8.469-6.102c2.057-1.476,3.605-2.577,4.596-3.274c6.684-4.651,17.1-11.892,31.104-21.616    c25.482-17.705,63.01-43.764,112.742-78.281c14.957-10.447,27.453-23.054,37.496-37.803c10.025-14.749,15.051-30.22,15.051-46.408    c0-13.525-4.873-25.098-14.598-34.737C526.461,63.829,514.932,59.013,501.613,59.013z" />
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="mailto:contact@salemaziel.com">
                            contact@salemaziel.com
                          </a>
                        </span>
                      </li>
                      {/*<li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          width="348.077px"
                          height="348.077px"
                          viewBox="0 0 348.077 348.077"
                          style={{
                            enableBackground: "new 0 0 348.077 348.077",
                          }}
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <g>
                              <g>
                                <path d="M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076     c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257     c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194     C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02     C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876     c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029     C350.631,303.527,350.95,285.795,340.273,275.083z" />
                              </g>
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                        <span>
                          <label>Phone:</label>{" "}
                          <a href="tel:+77 022 177 05 05">+77 022 177 05 05</a>
                        </span>
                        </li>*/}
                    </ul>
                    </Fade>
                  </div>
                  <div className="buttons">
                    <Fade top>
                    <ul>
                      <li>
                        <Button
                          as={Link}
                          to="/portfolio"
                          rel="preload"
                          className="button"
                        >
                          <span>View Portfolio</span>
                        </Button>
                      </li>
                      <li>
                        <Button
                          as={Link}
                          to="/contact"
                          rel="preload"
                          className="button"
                        >
                          <span>Send Message</span>
                        </Button>
                      </li>
                    </ul>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default SectionInfo
