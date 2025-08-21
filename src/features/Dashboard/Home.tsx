import GradeAverage from "../../components/analytics/GradeAverage";
import SubjectPerformance from "../../components/analytics/SubjectPerformance";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Dashboard | Dashboard Template"
        description="This is React.js Dashboard page - React.js Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <GradeAverage />

          <SubjectPerformance />
        </div>
      </div>
    </>
  );
}
