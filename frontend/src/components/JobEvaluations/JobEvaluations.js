import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import EvaluationList from '../EvaluationList/EvaluationList';

class JobEvaluations extends PureComponent {

  render() {
    const jobId = this.props.params.jobId;
    const evals = this.props.evaluations.filter(evaluation => evaluation.JobID === jobId);

    return (
      <div className="tab-pane active">
        <EvaluationList evaluations={ evals } containerClassName="nested-content" />
      </div>
    );
  }
}

function mapStateToProps({ evaluations }) {
  return { evaluations };
}

JobEvaluations.defaultProps = {
  evaluations: [],
  params: {},
};

JobEvaluations.propTypes = {
  evaluations: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(JobEvaluations);

