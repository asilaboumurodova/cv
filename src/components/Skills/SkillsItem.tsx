interface ISkill {
    name: string;
    icon: any;
}
function SkillsItem({ name, icon }: ISkill) {
    return (
        <div className="item flex flex-col gap-4 justify-center items-center p-4">
            <h5 className="text-lg font-medium">{name}</h5>
            <img src={icon} alt={`${name}-icon`} className="mb-2" />
        </div >
    )
}

export default SkillsItem