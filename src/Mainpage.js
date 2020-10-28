import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { VscSettingsGear } from 'react-icons/vsc';
import { RiSearchLine } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import { RiRecordCircleFill } from 'react-icons/ri';
import { TiMicrophoneOutline } from 'react-icons/ti';
import { FiFileText } from 'react-icons/fi';
import { BiFileBlank } from 'react-icons/bi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { MdLocalMovies } from 'react-icons/md';
import { GrAttachment } from 'react-icons/gr';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsCheckAll } from 'react-icons/bs';
import { BsCheck } from 'react-icons/bs';
import { VscSmiley } from 'react-icons/vsc';
import { RiSendPlaneFill } from 'react-icons/ri';
import { AiOutlinePoweroff } from 'react-icons/ai';

function Mainpage() {
    return (
        <>
            <div className="leftbar">
                <img src="https://qph.fs.quoracdn.net/main-qimg-bcdc6f8b0c6c861e6076113bf4cdd112.webp"
                    style={{ height: "80px", width: "80px", borderRadius: "70px 70px 70px 70px", marginLeft: "20px", marginTop: "100px" }} alt="loading..."
                />
                <h5 style={{ marginLeft: "20px" }} >Henry Jabbawockiez <BiChevronDown /></h5>
                <br />
                <br />
                <div style={{ marginLeft: "20px" }}>
                    <p><AiOutlineAppstore size="20px" /><span style={{ fontWeight: "bold", color: "gray", padding: "0 15px" }}>HOME</span></p>
                    <br />
                    <p><AiFillMessage size="20px" color="2A8BF2" /><span style={{ color: "dodgerblue", padding: "0 15px", fontWeight: "bold" }}>CHAT</span></p>
                    <br />
                    <p><RiContactsLine size="20px" /><span style={{ fontWeight: "bold", color: "gray", padding: "0 15px" }}>CONTACT</span></p>
                    <br />
                    <p><IoIosNotificationsOutline size="20px" /><span style={{ fontWeight: "bold", color: "gray", padding: "0 15px" }}>NOTIFICATION</span></p>
                    <br />
                    <p><RiCalendarTodoLine size="20px" /><span style={{ fontWeight: "bold", color: "gray", padding: "0 15px" }}>CALENDER</span></p>
                    <br />
                    <p><VscSettingsGear size="20px" /><span style={{ fontWeight: "bold", color: "gray", padding: "0 15px" }}>SETTINGS</span></p>
                </div>
                <div style={{ marginRight: "130%", marginTop: "-178%" }}>
                    <span className="scroll" style={{ height: "30px", borderLeft: "4px solid #2A8BF2" }}></span>
                </div>
                <p style={{ marginTop: "560px", fontWeight: "bold", color: "gray" }} ><AiOutlinePoweroff size="20px" style={{ padding: "0 15px" }} />LOG OUT</p>
            </div>
            <div className="middlebar">
                <h1>Chats</h1>
                <div style={{ marginTop: "-8%" }}>
                    <button className="button" >
                        + Create New Chat
                    </button>
                </div>
                <div style={{ marginTop: "-5%" }} >
                    <p style={{ color: "gray" }}>Recent Chats<BiChevronDown /></p>
                </div>
                <div className="box1">
                    <span style={{ color: "gray" }}><RiSearchLine style={{ marginTop: "22px", marginLeft: "30px", padding: "0 15px", color: "gray" }} /> Search</span>
                </div>
                <div style={{ marginTop: "-14.5%" }}>
                    <button style={{ marginLeft: "70%", width: "20%", height: "3rem", backgroundColor: "white", border: "none", color: "gray" }}>Messages<BiChevronDown /></button>
                </div>
                <div className="box2">
                    <div>
                        <BsDot size="3rem"
                            style=
                            {{
                                marginTop: "-2px",
                                marginLeft: "1px",
                                marginBottom: "-6%",
                                color: "green",
                            }} />
                    </div>
                    <div style={{ marginTop: "40px" }}>
                        <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/34/gettyimages-515933620.jpg?crop=1.0xw:1xh;center,top&resize=480:*"
                            style=
                            {{
                                height: "60px",
                                width: "60px",
                                borderRadius: "70px 70px 70px 70px",
                                marginLeft: "20px",
                                marginTop: "-25%"
                            }} alt="loading..."
                        />
                    </div>
                    <h4 style={{ marginLeft: "17%", marginTop: "-50px" }} >Luy Robin</h4>
                    <p style={{ marginLeft: "17%", marginTop: "-20px", color: "dodgerblue" }} >writes</p>
                    <div style={{ marginLeft: "80%", marginTop: "-70px" }}>
                        <p style={{ color: "gray" }}>1 minute ago</p>
                    </div>
                    <p style={{ marginLeft: "20px", marginTop: "50px", color: "gray" }} >Most of its textis made up from sections 1.10.32-3 of Cicero's</p>
                    <p style={{ marginLeft: "20px", marginTop: "-20px", color: "gray" }} >De finibus Bonorum et malorum (On the boundaries of Gods</p>
                    <p style={{ marginLeft: "20px", marginTop: "-20px", color: "gray" }} >and Evils; finibus may also be trnaslated as purposes).</p>
                    <div
                        style=
                        {{
                            marginTop: "-15%",
                            marginLeft: "90%",
                            backgroundColor: "tomato",
                            borderRadius: "80px 80px 80px 80px",
                            width: "24px",
                            height: "20px",
                            paddingBottom: "4px"
                        }}>
                        <p style={{ marginLeft: "30%", color: "white" }}> 2</p>
                    </div>
                </div>
                <div className="box3">
                    <div>
                        <BsDot size="3rem"
                            style=
                            {{
                                marginTop: "-2px",
                                marginLeft: "1px",
                                marginBottom: "-6%",
                                color: "green",
                            }} />
                    </div>
                    <div>
                        <img src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2019/07/Olivier_1500_Trptch.jpg"
                            style=
                            {{
                                height: "60px",
                                width: "60px",
                                borderRadius: "70px 70px 70px 70px",
                                marginLeft: "20px",
                                marginTop: "-2px"
                            }} alt="loading..."
                        />
                    </div>
                    <h4 style={{ marginLeft: "17%", marginTop: "-50px", color: "black" }} >Jared sunn</h4>
                    <div>
                        <p style={{ marginLeft: "17%", marginTop: "-20px", color: "dodgerblue" }} ><RiRecordCircleFill color="2A8BF2" /> records voice message</p>
                    </div>
                    <p style={{ marginLeft: "80%", marginTop: "-70px", color: "gray" }}>1 minute ago</p>
                    <p style={{ marginTop: "10%", color: "gray", marginLeft: "5%" }}><TiMicrophoneOutline /> Voice message (01:15)</p>
                    <button className="button1"><FiFileText /> Files (x2)</button>
                    <button className="button2"><HiOutlinePhotograph /> Photo</button>
                    <div
                        style=
                        {{
                            marginTop: "-15%",
                            marginLeft: "90%",
                            backgroundColor: "tomato",
                            borderRadius: "60px 60px 60px 60px",
                            width: "23px",
                            height: "15px",
                            paddingBottom: "8px"
                        }}>
                        <p style={{ marginLeft: "30%", color: "white" }}> 1</p>
                    </div>
                </div>
                <div className="box4">
                    <div>
                        <img src="https://images2.alphacoders.com/862/thumb-1920-86230.jpg"
                            style=
                            {{
                                height: "60px",
                                width: "60px",
                                borderRadius: "70px 70px 70px 70px",
                                marginLeft: "20px",
                                marginTop: "30px"
                            }} alt="loading..."
                        />
                    </div>
                    <h4 style={{ marginLeft: "17%", marginTop: "-60px" }} >Nika Jerrardo</h4>
                    <p style={{ marginLeft: "17%", marginTop: "-20px", color: "white" }}>last online 5 hours ago</p>
                    <p style={{ marginLeft: "20px", color: "white" }}>Cicero famously orated against his political opponent Lucius</p>
                    <p style={{ marginLeft: "20px", color: "white" }}>Sergius Catilina</p>
                    <p style={{ marginLeft: "80%", marginTop: "-130px", color: "white" }}>3 days ago</p>
                </div>
                <div className="box5">
                    <img src="https://post.healthline.com/wp-content/uploads/2020/08/732x549_Are_Random_Erections_Normal.jpg"
                        style=
                        {{
                            height: "60px",
                            width: "60px",
                            borderRadius: "70px 70px 70px 70px",
                            marginLeft: "20px",
                            marginTop: "20px"
                        }} alt="loading..."
                    />
                    <h4 style={{ marginLeft: "17%", marginTop: "-60px" }} >David Amrosa</h4>
                    <p style={{ marginLeft: "17%", marginTop: "-20px", color: "dodgerblue" }}>last online 5 hours ago</p>
                    <p style={{ marginLeft: "80%", marginTop: "-40px", color: "gray" }}>3 days ago</p>
                    <p style={{ marginLeft: "5%", marginTop: "5%", color: "gray" }}>Cicero famously orated against his political opponent Lucius</p>
                    <p style={{ marginLeft: "5%", color: "gray" }}>Sergius Catilina.</p>
                    <button className="button3"><MdLocalMovies /> Video (x3)</button>
                </div>
                <div style={{ marginRight: "29%", marginTop: "-155%" }}>
                    <span className="scroll"></span>
                </div>
            </div>
            <div className="rightbar">
                <div>
                    <img src="https://images2.alphacoders.com/862/thumb-1920-86230.jpg"
                        style=
                        {{
                            height: "60px",
                            width: "60px",
                            borderRadius: "70px 70px 70px 70px",
                            marginLeft: "20px",
                            marginTop: "20px"
                        }} alt="loading..."
                    />
                </div>
                <h4 style={{ marginLeft: "13%", marginTop: "-65px" }}>Nika Jerrardo</h4>
                <p style={{ marginLeft: "13%", marginTop: "-20px", color: "dodgerblue" }}>last online 5 hours ago</p>
                <div>
                    <div style={{
                        marginTop: "-40px",
                    }}>
                        <GrAttachment
                            style=
                            {{
                                marginLeft: "80%",
                                backgroundColor: "white",
                                paddingTop: "15px",
                                paddingBottom: "15px",
                                width: "5.5%",
                                borderRadius: "80px 80px 80px 80px",
                                boxShadow: "0px 12px 18px -3px rgba(0, 0, 0, 0.3)",
                                color: "gray"
                            }} />
                    </div>
                    <div style={{
                        marginTop: "-51px"
                    }}>
                        <BiDotsVerticalRounded
                            style=
                            {{
                                marginLeft: "90%",
                                backgroundColor: "white",
                                paddingTop: "15px",
                                paddingBottom: "15px",
                                width: "5.5%",
                                borderRadius: "80px 80px 80px 80px",
                                boxShadow: "0px 12px 18px -3px rgba(0, 0, 0, 0.3)",
                                color: "gray"
                            }} />
                    </div>
                </div>
                <hr />
                <div>
                    <img src="https://images2.alphacoders.com/862/thumb-1920-86230.jpg"
                        style=
                        {{
                            height: "40px",
                            width: "40px",
                            borderRadius: "70px 70px 70px 70px",
                            marginLeft: "20px",
                            marginTop: "20px"
                        }} alt="loading..."
                    />
                    <div>
                        <div
                            style=
                            {{
                                marginLeft: "10%",
                                marginRight: "25%",
                                marginTop: "-40px",
                                paddingTop: "5px",
                                borderRadius: "0px 10px 10px 10px",
                                background: "#2A8BF2",
                                height: "100px"
                            }}>
                            <div style={{ marginLeft: "5%" }}>
                                <p>Hello! Finally found the time to write to you) I need your help in</p>
                                <p>creating interactive animations for my mobile application.</p>
                            </div>
                            <div style={{ strokeLinecap: "round" }}>
                                <span className="scroll"></span>
                            </div>
                        </div>
                        <div style={{ marginTop: "-60px" }}>
                            <BiDotsHorizontalRounded size="1.5rem"
                                style=
                                {{
                                    marginLeft: "77%",
                                    color: "gray"
                                }} />
                        </div>
                        {/* <img>scroll bar logo</img> */}
                    </div>
                    <br />
                    <div>
                        <div
                            style=
                            {{
                                marginLeft: "10%",
                                marginRight: "65%",
                                borderRadius: "0px 10px 10px 10px",
                                background: "#2A8BF2",
                                height: "40px",
                            }} >
                            <div style={{ marginLeft: "13%", marginTop: "30px" }}>
                                <p>Can i send you files?</p>
                            </div>
                        </div>
                        <div style={{ marginTop: "-35px" }}>
                            <BiDotsHorizontalRounded size="1.5rem"
                                style=
                                {{
                                    marginLeft: "37%",
                                    color: "gray"
                                }} />
                        </div>
                    </div>
                </div>
                <p style={{ marginLeft: "26%", color: "gray" }}>4 days ago</p>
                <div>
                    <div style={{ marginBottom: "-40px" }}>
                        <BiDotsHorizontalRounded size="1.5rem"
                            style=
                            {{
                                marginLeft: "63%",
                                color: "gray"
                            }} />
                    </div>
                    <div style=
                        {{
                            marginTop: "-20px",
                            marginLeft: "69%",
                            marginRight: "9%",
                            borderRadius: "10px 10px 0px 10px",
                            height: "40px",
                            background: "whitesmoke",
                            paddingLeft: "13px",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            paddingBottom: "15px"
                        }}>
                        <p style={{ marginRight: "20px", color: "gray" }}>Hey! Okay, send out.</p>
                    </div>
                    <div style={{ marginLeft: "93%", marginTop: "-33px", color: "gray" }}>
                        <BsCheckAll />
                    </div>
                </div>
                <div style={{ marginLeft: "82%", color: "gray" }}>
                    <p>4 days ago</p>
                </div>
                <div>
                    <img src="https://images2.alphacoders.com/862/thumb-1920-86230.jpg"
                        style=
                        {{
                            height: "40px",
                            width: "40px",
                            borderRadius: "70px 70px 70px 70px",
                            marginLeft: "20px",
                            marginTop: "20px"
                        }} alt="loading..."
                    />
                    <div>
                        <div style=
                            {{
                                marginTop: "-40px",
                                borderRadius: "0px 10px 10px 10px",
                                background: "#2A8BF2",
                                marginLeft: "10%",
                                paddingTop: "30px",
                                paddingBottom: "5px",
                                marginRight: "70%"

                            }}>
                            <BiFileBlank
                                color="white"
                                style=
                                {{
                                    marginLeft: "10%",
                                    backgroundColor: "#69aef8",
                                    paddingTop: "7px",
                                    paddingBottom: "7px",
                                    paddingRight: "7px",
                                    paddingLeft: "7px",
                                    borderRadius: "5px 5px 5px 5px"
                                }} />
                            <p style={{ marginLeft: "40%", marginTop: "-50px", color: "white" }}>Style.zip</p>
                            <p style={{ marginLeft: "40%", marginTop: "-10px", color: "white" }}>41.36 Mb</p>
                        </div>
                        <div style={{ marginTop: "-50px", color: "gray" }}>
                            <BiDotsHorizontalRounded size="1.5rem" style={{ marginLeft: "33%" }} />
                        </div>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginLeft: "20%", color: "gray" }}>4 days agao</p>
                <p className="para" style={{ color: "gray" }}>3 days ago</p>
                <div>
                    <div style={{ marginTop: "100px", marginBottom: "-80px" }}>
                        <BiDotsHorizontalRounded size="1.5rem"
                            style=
                            {{
                                marginLeft: "33%",
                                color: "gray"
                            }} />
                    </div>
                    <div
                        style=
                        {{
                            marginTop: "-20px",
                            marginLeft: "40%",
                            marginRight: "9%",
                            borderRadius: "10px 10px 0px 10px",
                            height: "130px",
                            background: "whitesmoke",
                            paddingLeft: "13px",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            paddingBottom: "15px"
                        }}>
                        <p style={{ color: "gray" }}>Hello! I tweaked everything you asked. I am sending</p>
                        <p style={{ color: "gray" }}>the finished file.</p>
                        <p style={{ marginLeft: "50%", color: "dodgerblue" }}>(52.05 Mb) NEW_Style.zip <BiFileBlank /></p>
                    </div>
                    <div style={{ marginLeft: "93%", marginTop: "-70px", color: "gray" }}>
                        <BsCheck />
                    </div>
                </div>
                <p style={{ marginTop: "60px", marginLeft: "80%", color: "gray" }}>3 days ago</p>
                <div>
                    <div>
                        <div style={{ marginTop: "30px" }}>
                            <span
                                style=
                                {{
                                    backgroundColor: "dodgerblue",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    paddingRight: "7px",
                                    paddingLeft: "7px",
                                    borderRadius: "30px 30px 30px 30px",
                                    color: "white",
                                }}>
                                <MdLocalMovies />
                            </span>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <span
                                style=
                                {{
                                    backgroundColor: "dodgerblue",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    paddingRight: "7px",
                                    paddingLeft: "7px",
                                    borderRadius: "30px 30px 30px 30px",
                                    color: "white",
                                    marginLeft: "0%",
                                }}>
                                <HiOutlinePhotograph />
                            </span>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <span
                                style=
                                {{
                                    backgroundColor: "dodgerblue",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    paddingRight: "7px",
                                    paddingLeft: "7px",
                                    borderRadius: "30px 30px 30px 30px",
                                    color: "white",
                                }}>
                                <BiFileBlank />
                            </span>
                        </div>
                    </div>
                    <hr style={{ marginTop: "1%", color: "gray" }} />
                    <br />
                    <div style={{ marginLeft: "70px", marginTop: "-10px", color: "gray" }}>
                        <p>Type a message here</p>
                    </div>
                    <br />
                    <div style={{ marginTop: "-90px" }}>
                        <span
                            style=
                            {{
                                backgroundColor: "dodgerblue",
                                paddingTop: "5px",
                                paddingBottom: "7px",
                                paddingRight: "12px",
                                paddingLeft: "12px",
                                borderRadius: "30px 30px 30px 30px",
                                color: "white",
                            }} >
                            +
                    </span>
                    </div>
                    <div style={{ marginLeft: "85%", color: "gray" }}>
                        <VscSmiley size="1.5rem" />
                    </div>
                    <div style=
                        {{
                            marginLeft: "93%",
                            marginTop: "-20px",
                            backgroundColor: "dodgerblue",
                            paddingTop: "5px",
                            paddingBottom: "3px",
                            paddingRight: "3px",
                            paddingLeft: "3px",
                            marginRight: "24px",
                            borderRadius: "60px 60px 60px 60px",
                            color: "white"
                        }}>
                        <RiSendPlaneFill size="1.5rem" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainpage;
