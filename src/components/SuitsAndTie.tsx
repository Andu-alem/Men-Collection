import Image from 'next/image'
import FadeInAnimation from './FadeInAnimation'
import TranslateAnimation from './TranslateAnimation'

const Suits = () => {
    return (
        <div className="h-screen sm:h-[120vh] w-full flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-1">
                <TranslateAnimation duration={ 0.7 }>
                    <Image
                        src="/suit233.png"
                        width={ 400 }
                        height={ 300 }
                        alt='collection'
                    />
                </TranslateAnimation>
                <FadeInAnimation
                    duration={ 1.3 }
                    className="flex flex-col justify-center items-center"
                >
                    <Image
                        className="rounded-lg"
                        src="/suit222.png"
                        alt='ties'
                        width={ 250 }
                        height={ 100 }
                    />
                    <h4 className="text-[30px] sm:text-[35px] text-orange-500 font-bold text-center">Explore our <span className="text-white">suits</span> and <span className="text-white">ties</span> collections.</h4>
                </FadeInAnimation>
                <TranslateAnimation duration={ 1 }>
                    <Image
                        src="/suit234.png"
                        width={ 400 }
                        height={ 300 }
                        alt='collection'
                    />
                </TranslateAnimation>
            </div>
        </div>
    )
}

export default Suits