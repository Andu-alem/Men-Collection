import Image from 'next/image'
import FadeInAnimation from './FadeInAnimation'
import TranslateAnimation from './TranslateAnimation'

const Suits = () => {
    return (
        <div className="min-h-[90vh] w-full flex flex-col items-center justify-center">
            <div className="flex flex-col sm:flex-row sm:justify-evenly gap-5">
                <TranslateAnimation duration={ 0.5 }>
                    <Image
                        src="/background/suit233.png"
                        width={ 500 }
                        height={ 300 }
                        alt='collection'
                    />
                </TranslateAnimation>
                <FadeInAnimation
                    duration={ 1 }
                    className="flex flex-col justify-center items-center"
                >
                    <Image
                        className="rounded-xl"
                        src="/background/suit222.png"
                        alt='ties'
                        width={ 200 }
                        height={ 100 }
                    />
                    <h4 className="text-[27px] md:text-[35px] text-orange-500 font-bold text-center">Explore our <span className="text-white">suits</span> and <span className="text-white">ties</span> collections.</h4>
                </FadeInAnimation>
                <TranslateAnimation duration={ 0.7 }>
                    <Image
                        src="/background/suit234.png"
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