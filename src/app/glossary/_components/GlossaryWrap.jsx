import React from "react";

const GlossaryWrap = () => {
  const glossaryTerms = [
    {
      id: "A",
      title: "Applicant Tracking System (ATS)",
      content:
        "A software application used by organisations to manage and automate the recruitment process. ATS screens the resume, ranks candidates based on predefined criteria, and tracks applicants throughout the hiring cycle.",
    },
    {
      id: "B",
      title: "Behavioral Interview",
      content:
        "An interview technique in which candidates are asked to provide specific examples of past behaviour related to the skills or experiences required for the job. Questions are designed to assess how candidates have handled situations in the past as a predictor of future performance.",
    },
    {
      id: "C",
      title: "Competency-Based Interviewing",
      content:
        "A structured form of interviewing that evaluates a candidate’s competence in critical areas, such as leadership, problem-solving, or communication. Competency-based interviews focus on how well candidates meet the core competencies required for a job.",
    },
    {
      id: "D",
      title: "Disparate Impact",
      content:
        "A legal term refers to policies or practices in employment that are neutral on the surface but disproportionately negatively affect a protected group. Disparate impact can lead to claims of discrimination under equal employment laws.",
    },
    {
      id: "E",
      title: "Employment Verification",
      content:
        "Employment verification is the process by which an employer confirms the job history, qualifications, and identity of a potential hire by contacting previous employers or educational institutions. It helps ensure the accuracy of information provided by the candidate.",
    },
    {
      id: "F",
      title: "Fixed-Term Contract",
      content:
        "A type of employment agreement in which an employee is hired for a specific period, with a predefined start and end date. Fixed-term contracts are often used for project-based work or seasonal roles and may or may not be renewed upon expiration.",
    },
    {
      id: "G",
      title: "Gap Analysis (HR)",
      content:
        "An assessment method determines the difference between current workforce capabilities and the desired capabilities needed to achieve business goals. Gap analysis helps organisations identify areas for improvement in training, hiring, or development.",
    },
    {
      id: "H",
      title: "Human Resource Information System (HRIS)",
      content:
        "A digital platform that manages employee data, payroll, benefits, and compliance tasks. HRIS systems automate many HR functions, allowing departments to streamline operations and improve efficiency.",
    },
    {
      id: "I",
      title: "Implied Contract",
      content:
        "A legal concept where terms of employment are not explicitly stated but are inferred from actions, policies, or statements. For example, long-term employment expectations based on company policies or verbal assurances can create an implied contract between employer and employee.",
    },
    {
      id: "J",
      title: "Job Benchmarking",
      content:
        "A systematic process of evaluating and comparing a job role to industry standards, market conditions, and internal expectations to establish appropriate salary, benefits, and job requirements. Job benchmarking ensures consistency in job descriptions and compensation.",
    },
    {
      id: "K",
      title: "Key Person Insurance",
      content:
        "A type of business insurance that compensates a company in the event of the death or incapacity of a key employee whose skills or knowledge are critical to the organisation. This insurance helps mitigate financial losses during the hiring or retraining process.",
    },
    {
      id: "L",
      title: "Labor Market Testing (LMT)",
      content:
        "Some countries require this process during recruitment, particularly when hiring foreign workers. LMT involves demonstrating that no suitable local workers are available to fill the position before offering it to a non-national.",
    },
    {
      id: "M",
      title: "Management by Objectives (MBO)",
      content:
        "A performance management approach where employees and managers jointly set measurable goals for a specific period. Progress is monitored, and achieving objectives influences compensation, promotions, or further development.",
    },
    {
      id: "N",
      title: "Non-Disclosure Agreement (NDA)",
      content:
        "A legally binding contract in which an employee agrees not to disclose or share confidential company information, trade secrets, or sensitive data with outside parties. NDAs are often used to protect intellectual property.",
    },
    {
      id: "O",
      title: "Organisational Development (OD)",
      content:
        "A deliberate effort to improve an organisation’s efficiency and effectiveness through interventions in its processes, structures, and culture. OD strategies often align the workforce with the company’s goals to enhance performance.",
    },
    {
      id: "P",
      title: "Psychometric Testing",
      content:
        "Psychometric tests are an assessment method used in recruitment to measure candidates’ cognitive abilities, personality traits, and behavioural tendencies. By providing objective data, they help employers predict a candidate’s suitability for a specific role.",
    },
    {
      id: "Q",
      title: "Quiet Quitting",
      content:
        "A workplace trend where employees perform only the minimum required tasks of their job, without going above and beyond, often due to disengagement or dissatisfaction. Quiet quitting can negatively impact productivity and morale within an organisation.",
    },
    {
      id: "R",
      title: "Redundancy Pay",
      content:
        "Financial compensation is provided to employees laid off because their roles became redundant. Redundancy pay is typically calculated based on the length of service and the employee’s salary and is intended to support the employee while they find new employment.",
    },
    {
      id: "S",
      title: "Sabbatical Leave",
      content:
        "Sabbatical leave is an extended period of paid or unpaid leave that allows employees to take time off for personal or professional development, such as education, travel, or research. It is often offered to long-term employees as a reward for service.",
    },
    {
      id: "T",
      title: "Total Rewards",
      content:
        "A holistic view of the complete benefits package, compensation, and non-monetary employee rewards. Total rewards include salary, bonuses, benefits, work-life balance initiatives, and opportunities for personal development.",
    },
    {
      id: "U",
      title: "Union Shop Agreement",
      content:
        "A labour agreement requires all employees within a specific job classification or department to become union members after being hired. Union shop agreements are common in industries with solid labour representation.",
    },
    {
      id: "V",
      title: "Voluntary Redundancy",
      content:
        "Employers offer the option of voluntarily letting employees accept a redundancy package and leave the company during downsizing. This approach helps organisations reduce workforce numbers without resorting to forced layoffs.",
    },
    {
      id: "W",
      title: "Whistleblower Protection",
      content:
        "Laws or policies protect employees who report illegal or unethical practices within an organisation from retaliation, such as demotion or dismissal. Whistleblower protection encourages employees to come forward with concerns without fear of retribution.",
    },
    {
      id: "X",
      title: "X-Generation Leadership",
      content:
        "A term describes leadership styles influenced by Generation X’s values, including independence, adaptability, and a preference for informal communication. X-Generation leaders often emphasise work-life balance and employee autonomy.",
    },
    {
      id: "Y",
      title: "Yellow-Dog Contract",
      content:
        "An agreement between an employer and employee is one in which the employee agrees not to join a labour union as a condition of employment. These contracts were more common in the early 20th century but are now illegal in many countries.",
    },
    {
      id: "Z",
      title: "Zero-Based Budgeting (ZBB)",
      content:
        "An approach to budgeting in which all expenses must be justified from scratch for each new period, rather than using previous budgets as a starting point. ZBB is used in workforce planning to evaluate whether each role and expense is necessary to meet business goals.",
    },
  ];

  return (
    <section className="glossary-wrap">
      <div className="_container">
        <div className="glossary-wrap__body">
          {glossaryTerms.map((item, index) => (
            <div className="item fadeInUp" key={index}>
              <div className="letter">{item.id}</div>
              <div className="details">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlossaryWrap;
