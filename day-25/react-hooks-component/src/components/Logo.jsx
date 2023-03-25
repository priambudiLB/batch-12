function Logo({ href, src, className, alt }) {
    return <a href={href} target="_blank">
        <img src={src} className={className} alt={alt} />
    </a>
}

export default Logo
