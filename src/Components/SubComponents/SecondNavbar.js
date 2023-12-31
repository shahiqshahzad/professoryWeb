import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import profile from "../../Assets/img/Profile.png";
import msg from "../../Assets/img/messages.png";
import notification from "../../Assets/img/Notification.png";
import GetData from "../Api/GetData";
import Select from "react-select";
const SecondNavbar = () => {
  const [counteries, setCounteries] = useState([]);
  const [countryID, setCountryID] = useState();
  const [notificationOPen, setNotificationOpen] = useState(false);
  const [messageboxOpen, setMessageboxOpen] = useState(false);
  function expand() {
    setNotificationOpen(true);
  }
  function close() {
    setNotificationOpen(false);
  }
  function messageboxxOpen() {
    setMessageboxOpen(true);
  }
  function messageboxxClose() {
    setMessageboxOpen(false);
  }
  const handleChange = (value) => {
    setCountryID(value.countryID);

    console.log(localStorage.setItem("User".countryID, countryID));
  };
  const getData = async () => {
    const data = await GetData.CounteriesData();
    setCounteries(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="SeconNavbar container-fluid">
        <div className="MaxWidth">
          <Navbar className="row">
            <div className="col-11 mx-auto">
              <div className="row container px-5">
                <div className="my-auto mr-auto">
                  <Nav className="" navbar-nav></Nav>
                  <Nav className="navbar-nav mx-auto b ">
                    <Select
                      className="px-4 "
                      value={counteries.countryID}
                      options={counteries}
                      isSearchable={false}
                      defaultValue={
                        JSON.parse(localStorage.getItem("User")).countryID
                      }
                      onChange={handleChange}
                      formatOptionLabel={(country) => (
                        <div
                          className="country-option"
                          style={{ backgroundColor: "none" }}
                        >
                          <img src={country.flag} alt="country-image" />
                        </div>
                      )}
                    />
                    <NavLink
                      className="nav-link white px-1 px-lg-3"
                      to="/BookStore"
                    >
                      BookStore
                    </NavLink>
                    <NavLink
                      className="nav-link white px-1 px-lg-3"
                      to="/ServiceProvider"
                    >
                      ServiceProvider
                    </NavLink>
                    <NavLink
                      className="nav-link white px-1 px-lg-3"
                      to="/ProfessorRating"
                    >
                      Professor Rating
                    </NavLink>
                    <NavLink
                      className="nav-link white px-1 px-lg-3"
                      to="/SubjectRating"
                    >
                      Subject Rating
                    </NavLink>
                    <NavLink
                      className="nav-link white px-1 px-lg-3"
                      to="/Classroom"
                    >
                      Classroom
                    </NavLink>
                    <NavLink
                      className="nav-link white px-1 px-lg-3"
                      to="/MyBackpack"
                    >
                      MyBackpack
                    </NavLink>
                  </Nav>
                </div>
                <div className="ml-auto ml-md-0 my-auto">
                  <div className="d-inline-flex float-left">
                    <div className="px-1">
                      <div
                        className="navbar-notifications"
                        tabIndex={0}
                        onFocus={expand}
                        onBlur={close}
                      >
                        <img
                          className="ml-auto"
                          src={notification}
                          alt="Profile"
                        />
                      </div>
                      {notificationOPen ? (
                        <div className="secondnavbar-notifications_dd">
                          <ul className="secondnavbar-notifications_ul">
                            <li className="successs starbucks">
                              <div className="secondnavbar-notify_icon">
                                <span className="secondnavbar-notification-profile-icon"></span>
                              </div>
                              <div className="secondnavbar-notify_data">
                                <div className="secondnavbar-notification_title">
                                  Lorem ipsum dolor sit
                                </div>
                                <div className="secondnavbar-notifications_subtitle">
                                  Lorem ipsum dolor sit amet,consecteture.
                                </div>
                              </div>
                              <div className="secondnavbar-notify_status"></div>
                            </li>
                            <li className="successs professory-second-notification">
                              <div className="secondnavbar-notify_icon">
                                <span className="secondnavbar-notification-profile-icon"></span>
                              </div>
                              <div className="secondnavbar-notify_data">
                                <div className="secondnavbar-notification_title">
                                  Lorem ipsum dolor sit
                                </div>
                                <div className="secondnavbar-notifications_subtitle">
                                  Lorem ipsum dolor sit amet,consecteture.
                                </div>
                              </div>
                              <div className="secondnavbar-notify_status"></div>
                            </li>
                            <li className="successs professory-third-notification">
                              <div className="secondnavbar-notify_icon">
                                <span className="secondnavbar-notification-profile-icon"></span>
                              </div>
                              <div className="secondnavbar-notify_data">
                                <div className="secondnavbar-notification_title">
                                  Lorem ipsum dolor sit
                                </div>
                                <div className="secondnavbar-notifications_subtitle">
                                  Lorem ipsum dolor sit amet,consecteture.
                                </div>
                              </div>
                              <div className="secondnavbar-notify_status"></div>
                            </li>

                            <li className="secondnavbar-notification-showall">
                              <p className="link">Show All Activities</p>
                            </li>
                          </ul>
                        </div>
                      ) : null}
                    </div>
                    <div className="px-1">
                      <div
                        className="secondnavbar-messages"
                        tabIndex={0}
                        onFocus={messageboxxOpen}
                        onBlur={messageboxxClose}
                      >
                        <img className="ml-auto" src={msg} alt="msg" />
                      </div>

                      {messageboxOpen ? (
                        <div className="secondnavbar-messagebox_dd">
                          <ul className="secondnavbar-messagebox_ul">
                            <li>
                              <div className="secondnavbar-messagebox-data">
                                Hello,Welcome to professory
                              </div>
                            </li>
                            <li className="secondnavbar-messagebox-showall">
                              <p className="link">Show All Activities</p>
                            </li>
                          </ul>
                        </div>
                      ) : null}
                    </div>
                    <div className="px-1">
                      <div className="secondnavbar-profile">
                        <img
                          className="ml-auto"
                          src={profile}
                          alt="notification"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="dropdown newTab">
                            <button type="button"
                                className="mb-0 FS_20 px-2 White Grey border-0 h-100 dropdown-toggle"
                                id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"
                                style={{ backgroundColor: "#7AACB3" }} ><img className="ml-auto" src={profile} alt="notification" /></button>

                            <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton">
                                // <div className="col-2 ml-auto p-0">
                                    <div className="d-inline-flex float-left">
                                        <div className="px-1">
                                            <img className="ml-auto" src={notification} alt="Profile" />
                                        </div>
                                        <div className="px-1">
                                            <img className="ml-auto" src={msg} alt="msg" />
                                        </div>
                                        <div className="px-1">
                                            <img className="ml-auto" src={profile} alt="notification" />
                                        </div>
                                    </div>
                                // </div>
                            </div>
                        </div> */}
            </div>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default SecondNavbar;
