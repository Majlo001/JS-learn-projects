import Footer from './footer';

export default function Layout({children}){
    return(
        <>
            <div className="py-5">
                {children}
            </div>
            <Footer />
        </>
    )
}