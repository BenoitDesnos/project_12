type InfoCardProps = {
  icon: string;
  title: string;
  value: string;
};
function InfoCard({ icon, title, value }: InfoCardProps) {
  return (
    <div className="mb-10 flex gap-6 h-32">
      <div className="w-16 h-16">
        <img src={icon} className="w-full h-full" />
      </div>
      <div>
        <p className="text-infoValue text-xl font-semibold">{value}</p>
        <h3 className="text-infoTitle font-medium text-sm">{title}</h3>
      </div>
    </div>
  );
}

export default InfoCard;
