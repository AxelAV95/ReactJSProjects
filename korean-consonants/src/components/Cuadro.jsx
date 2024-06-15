import React, { useState } from 'react'
import { Button, Modal, Accordion } from "flowbite-react";
import { Progress } from "flowbite-react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'animate.css';

function Cuadro({ animation, silaba }) {
    const [openModal, setOpenModal] = useState(false);

    const play = async (audio) => {
        await new Audio(audio).play()
    }
    return (
        <>
    <div className={animation}>
            <div onClick={() => setOpenModal(true)}
                className="cuadro flex justify-center items-center h-48 w-48 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 bg-orange-500 shadow rounded-lg"
            >
                <h2 style={{ fontSize: '35px' }}>{silaba ? silaba : null}</h2>

            </div>

            <Modal className='animate__animated animate__pulse' show={openModal} onClose={() => setOpenModal(false)}>
                {/* <Modal.Header > </Modal.Header> */}
                <Modal.Body>
                    
                    <h1 className='flex justify-center' style={{ fontSize: '40px' }}>{silaba}</h1>

                    {silaba === '바' && (<>


                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>Cuando ㅂ está al principio de una palabra suena:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>B</span> <span className='ml-64'>P</span>
                            </div>
                            <Progress progress={65} color="red" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>  Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <AudioPlayer
                                                className='mt-4 mb-3 w-80 '

                                                src="https://www.howtostudykorean.com/wp-content/uploads/2014/01/wLesson-2-5.mp3"
                                                onPlay={e => console.log("onPlay")
                                                }
                                                showSkipControls={false}
                                                showJumpControls={false}

                                            />
                                            <h2 className='mt-5'><strong style={{ fontSize: '20px' }}>방</strong> = Cuarto</h2>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>
                        </div>
                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>Cuando ㅂ está en medio de una palabra suena:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>B</span> <span className='ml-64'>P</span>
                            </div>
                            <Progress progress={32} color="green" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2014/01/wLesson-2-2.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'>가<strong style={{ fontSize: '20px' }}>방</strong>  = Bolso</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '파' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>La intensidad de <strong style={{ fontSize: '24px' }}>ㅍ</strong>  es muy fuerte:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>B</span> <span className='ml-64'>P</span>
                            </div>
                            <Progress progress={92} color="red" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2014/01/wLesson-2-11.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'><strong style={{ fontSize: '20px' }} >펜 </strong>  = Lapicero</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '빠' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p><strong style={{ fontSize: '24px' }}>ㅃ</strong>  suena igual que la <strong style={{ fontSize: '20px' }}>P</strong> en español</p>
                                </div>

                            </div>

                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2015/02/Lesson-11-vocab-36.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'>예<strong style={{ fontSize: '20px' }}>쁘</strong>다  = Bonita</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '다' && (<>


                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>Cuando ㄷ está al principio de una palabra suena:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>D</span> <span className='ml-64'>T</span>
                            </div>
                            <Progress progress={65} color="red" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>  Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <AudioPlayer
                                                className='mt-4 mb-3 w-80 '

                                                src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson26v8.mp3"
                                                onPlay={e => console.log("onPlay")
                                                }
                                                showSkipControls={false}
                                                showJumpControls={false}

                                            />
                                            <h2 className='mt-5'><strong style={{ fontSize: '20px' }}>동</strong> 네  = Vecindario</h2>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>
                        </div>
                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>Cuando ㄷ está en medio de una palabra suena:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>D</span> <span className='ml-64'>T</span>
                            </div>
                            <Progress progress={32} color="green" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson26v11.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'>정<strong style={{ fontSize: '20px' }}>답 </strong>  = Respuesta correcta</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '타' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>La intensidad de <strong style={{ fontSize: '24px' }}>ㅌ</strong>  es muy fuerte:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>D</span> <span className='ml-64'>T</span>
                            </div>
                            <Progress progress={97} color="red" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '
                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson26v43.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'><strong style={{ fontSize: '20px' }} >틀</strong>리다 = Estar equivocado, o incorrecto</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '따' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p><strong style={{ fontSize: '24px' }}>ㄸ</strong>  suena igual que la <strong style={{ fontSize: '20px' }}>T</strong> en español</p>
                                </div>

                            </div>

                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson27v23.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'><strong style={{ fontSize: '20px' }}>땀</strong> = Sudor</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '사' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>La intensidad de <strong style={{ fontSize: '24px' }}>ㅅ</strong>  es muy fuerte y con bastante aire:</p>
                                </div>
                                {/* <span className='ml-34 sm:ml-44'></span> <span className='ml-64'>S</span> */}
                            </div>
                            <Progress progress={97} color="red" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '
                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson27v26.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'><strong style={{ fontSize: '20px' }} >손</strong>님 = Invitado</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '싸' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p><strong style={{ fontSize: '24px' }}>ㅆ</strong>  suena igual que la <strong style={{ fontSize: '20px' }}>S</strong> en español</p>
                                </div>

                            </div>

                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2015/11/Lesson21v36.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'>벌<strong style={{ fontSize: '20px' }}>써</strong> = Ya</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '가' && (<>


                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>Cuando ㄱ está al principio de una palabra suena:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>G</span> <span className='ml-64'>K</span>
                            </div>
                            <Progress progress={65} color="red" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>  Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <AudioPlayer
                                                className='mt-4 mb-3 w-80 '

                                                src="https://www.howtostudykorean.com/wp-content/uploads/2015/11/Lesson21v4.mp3"
                                                onPlay={e => console.log("onPlay")
                                                }
                                                showSkipControls={false}
                                                showJumpControls={false}

                                            />
                                            <h2 className='mt-5'><strong style={{ fontSize: '20px' }}>결</strong>혼식  = Boda</h2>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>
                        </div>
                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>Cuando ㄱ está en medio de una palabra suena:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>G</span> <span className='ml-64'>K</span>
                            </div>
                            <Progress progress={32} color="green" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2015/11/Lesson21v20.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'>이<strong style={{ fontSize: '20px' }}>기</strong>다 = Ganar</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '카' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>La intensidad de <strong style={{ fontSize: '24px' }}>ㅋ</strong>  es muy fuerte y con bastante aire:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>G</span> <span className='ml-64'>K</span>
                            </div>
                            <Progress progress={97} color="red" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '
                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson28v33.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'>지<strong style={{ fontSize: '20px' }} >키</strong>다 = Proteger</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '까' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p><strong style={{ fontSize: '24px' }}>ㄲ</strong>  suena igual que la <strong style={{ fontSize: '20px' }}>K</strong> en español</p>
                                </div>

                            </div>

                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson29v6.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'>느<strong style={{ fontSize: '20px' }}>낌 </strong> = Sentimiento</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '자' && (<>


                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>Cuando ㅈ está al principio de una palabra suena:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>J</span> <span className='ml-64'>Ch</span>
                            </div>
                            <Progress progress={65} color="red" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>  Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <AudioPlayer
                                                className='mt-4 mb-3 w-80 '

                                                src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson29v10.mp3"
                                                onPlay={e => console.log("onPlay")
                                                }
                                                showSkipControls={false}
                                                showJumpControls={false}

                                            />
                                            <h2 className='mt-5'><strong style={{ fontSize: '20px' }}>좌</strong>석 = Asiento</h2>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>
                        </div>
                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>Cuando ㄱ está en medio de una palabra suena:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>J</span> <span className='ml-64'>Ch</span>
                            </div>
                            <Progress progress={32} color="green" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson29v11.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'>사<strong style={{ fontSize: '20px' }}>전 </strong> = Diccionario</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '차' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p>La intensidad de <strong style={{ fontSize: '24px' }}>ㅊ</strong>  es muy fuerte y con bastante aire:</p>
                                </div>
                                <span className='ml-34 sm:ml-44'>J</span> <span className='ml-64'>Ch</span>
                            </div>
                            <Progress progress={97} color="red" textLabel="Flowbite" size="lg" />
                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '
                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson29v38.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'><strong style={{ fontSize: '20px' }} >쳐</strong>다보다 = Mirar fijamente</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '짜' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8'>
                                    <p><strong style={{ fontSize: '24px' }}>ㅉ</strong>  suena parecido a <strong style={{ fontSize: '20px' }}>ya o lla</strong> en español, puedes notar que este sonido al
                                        pronunciarse da una sensación de “pausa
                                        en la garganta”, y no emite ningún tipo de
                                        aire</p>
                                </div>

                            </div>

                            <Accordion className='mt-3' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Ejemplo</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                            <div className="flex justify-center items-center flex-col grid-col-1 space-y-6">

                                                <AudioPlayer
                                                    className='mt-4 mb-3 w-80 '

                                                    src="https://www.howtostudykorean.com/wp-content/uploads/2016/01/Lesson42v26.mp3"
                                                    onPlay={e => console.log("onPlay")
                                                    }
                                                    showSkipControls={false}
                                                    showJumpControls={false}

                                                />
                                                <h2 className='mt-5'>가<strong style={{ fontSize: '20px' }}>짜 </strong> = Falso</h2>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>

                        </div>

                    </>
                    )}

                    {silaba === '' && (<>

                        <hr className='mt-4' />
                        <div>
                            <div>
                                <div className='mt-8 flex justify-center flex-col items-center'>
                                    <p>Creado por <a className='text-blue-950' target='_blank' href="https://axelandrade21.github.io/web/portafolio/">Axel A.V</a></p>
                                    <span><img className='mt-4 rounded-full w-20 h-20 object-cover ml-2 mr-2' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/233bca4e-2c13-4de9-a446-b4e326bb7def/dfn131w-6e174a8f-eb70-4aec-9700-75f80c6d6bce.png/v1/fill/w_1280,h_1280,q_80,strp/gear_5_luffy_fanart_thing_by_onsoleguy_dfn131w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIzM2JjYTRlLTJjMTMtNGRlOS1hNDQ2LWI0ZTMyNmJiN2RlZlwvZGZuMTMxdy02ZTE3NGE4Zi1lYjcwLTRhZWMtOTcwMC03NWY4MGM2ZDZiY2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FLFAPRO-nbhHNl_qjneD_WlvwfINoZouUfDdF5JQhIw" alt="" /></span>
                                    <p className='mt-3'>Coreano para cada día</p>
                                    <p><a className='text-blue-950' target='_blank' href="https://www.instagram.com/_coreanopcd/">@_coreanopcd</a></p>
                                    <p>2024</p>
                                    
                                </div>
                                

                            </div>

                        </div>

                    </>
                    )}





                </Modal.Body>
                <Modal.Footer className='flex justify-center'>

                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </>
        

    )
}

export default Cuadro
