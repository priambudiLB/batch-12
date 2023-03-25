import Logo from './Logo'

function Logos({ data }) {
    return <div>
        {data.map((item) => {
            return <Logo
                key={item.alt}
                href={item.href}
                src={item.src}
                className={item.className}
                alt={item.alt}
            />
        })}
    </div>
}

export default Logos
