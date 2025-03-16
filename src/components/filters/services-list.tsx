import { ServiceCheckBox } from '@/components/filters/service-checkbox';
import { ServiceCheckBoxSkeleton } from '@/components/filters/service-checkbox.skeleton';
import { useFetchServicesList } from '@/hooks/use-fetch-services-list';
import { useServicesFilter } from '@/hooks/use-services-filter';

export default function ServicesList() {
  const { selectedServices, handleServiceToggle } = useServicesFilter();
  const {
    data: servicesList,
    isPending,
    isError,
    error,
  } = useFetchServicesList();

  if (isPending) {
    return (
      <>
        <ServiceCheckBoxSkeleton />
        <ServiceCheckBoxSkeleton />
        <ServiceCheckBoxSkeleton />
        <ServiceCheckBoxSkeleton />
        <ServiceCheckBoxSkeleton />
      </>
    );
  }

  if (isError) {
    return <p>Error happend: {error.message}</p>;
  }

  return (
    <>
      {servicesList.results.map((item) => (
        <ServiceCheckBox
          key={item.slug}
          isChecked={selectedServices.includes(item.slug)}
          onCheckedChange={(checked) => handleServiceToggle(item.slug, checked)}
          {...item}
        />
      ))}
    </>
  );
}
