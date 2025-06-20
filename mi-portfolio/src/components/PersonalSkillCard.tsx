import type { PersonalSkillCardProps } from "../types/CardProps";

export const PersonalSkillCard: React.FC<PersonalSkillCardProps> = ({ skill }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-600 
                  hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group 
                  flex flex-col items-center text-center `}
    >
      <div className="bg-gradient-to-r from-emerald-50 to-blue-100 p-3 rounded-full mb-3 group-hover:from-emerald-200 group-hover:to-blue-300 transition-all duration-300 flex items-center justify-center">
        {skill.icon}
      </div>
      <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm mb-1 leading-tight">{skill.name}</h3>
    </div>
  );
};