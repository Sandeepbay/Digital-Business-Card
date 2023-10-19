import "./Resume.css"

export default function Resume() {
    const cvFilePath = 'https://drive.google.com/file/d/1rRG5WlHpRfl1uyZ1bqO28zOTWpDSS--i/view?usp=share_link'
    return (
        <div className="Resume">
            <a href={cvFilePath} download>Download CV</a>
        </div>
    )
}