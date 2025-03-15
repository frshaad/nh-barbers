import BarberCard from '@/app/barbers/_components/barber-card';

export default function Results() {
  return (
    <div className="h-[700px] flex-[2] space-y-3 overflow-y-scroll pb-10">
      <BarberCard />
      <BarberCard />
      <BarberCard />
      <BarberCard />
      <BarberCard />
      <BarberCard />
      <BarberCard />
      <BarberCard />
    </div>
  );
}
