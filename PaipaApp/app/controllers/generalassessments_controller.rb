class GeneralassessmentsController < ApiController
  before_action :require_login #, except: [:index, :show] UNCOMMENT TO TEST/SHOW ALL USERS

  def index
    generalassessments = GeneralAssessment.all
    render json: { generalassessments: generalassessments }
  end

  def show
    generalassessments = GeneralAssessment.find(params[:id])
    generalassessments_user = generalassessments.user
    render json: { generalassessments: generalassessments, username: generalassessments_user.username }
  end

  def create
    generalassessments = GeneralAssessment.new(generalassessments_params)
    generalassessments.user = current_user

    if generalassessments.save
      render json: {
        message: 'ok',
        generalassessments: generalassessments,
      }
    else
      render json: {message: 'Could not create generalassessments'}
    end
  end

  private
  def generalassessments_params
    params.require(:generalassessments).permit(:name, :age, :ethnicity, :weight, :height, :arthritis, :hypertension, :cholesterol, :chd, :diabetes, :copd, :alzheimers, :familyarthritis, :familyhypertension, :familycholesterol, :familychd, :familydiabetes, :familycopd)
  end

end
