import React from 'react';

class ItemsForm extends React.Component {

    render() {
        return (
            <fieldset className={this.props.className}>
                <div className="row ls-lg-margin-bottom">
                    <div className="col-md-4">
                        <h3 className="ls-title-4 ls-md-margin-bottom">Título lateral 1</h3>
                        <p>
                            Nisi minim laboris irure tempor adipisicing cupidatat elit non adipisicing nulla ipsum. Fugiat elit ex officia laborum aliqua deserunt minim mollit tempor id. Cupidatat id est reprehenderit reprehenderit incididunt. Incididunt tempor magna anim ex commodo est cillum voluptate. Enim ullamco exercitation duis enim cillum id Lorem quis. Cillum irure et laborum ad anim dolore officia ea occaecat aliquip non.
                        </p>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <label className="ls-label">
                            <b className="ls-label-text">Nome do item 1</b>
                            <input type="text" name="item[url]" placeholder="Ex: sugestão de nome" required />
                        </label>

                        <label className="ls-label">
                            <b className="ls-label-text">Nome do item 2</b>
                            <input type="text" name="item[url]" placeholder="Ex: sugestão de nome" required />
                        </label>

                        <label className="ls-label">
                            <b className="ls-label-text">Nome do item 3</b>
                            <input type="text" name="item[url]" placeholder="Ex: sugestão de nome" required />
                        </label>
                    </div>
                    <div className="ls-clearfix"></div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <h3 className="ls-title-4 ls-md-margin-bottom">Título lateral 2</h3>
                        <p>
                            Nisi minim laboris irure tempor adipisicing cupidatat elit non adipisicing nulla ipsum. Fugiat elit ex officia laborum aliqua deserunt minim mollit tempor id. Cupidatat id est reprehenderit reprehenderit incididunt. Incididunt tempor magna anim ex commodo est cillum voluptate. Enim ullamco exercitation duis enim cillum id Lorem quis. Cillum irure et laborum ad anim dolore officia ea occaecat aliquip non.
                        </p>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <label className="ls-label">
                            <b className="ls-label-text">Nome do item 4</b>
                            <input type="text" name="item[url]" placeholder="Ex: sugestão de nome" required />
                        </label>

                        <label className="ls-label">
                            <b className="ls-label-text">Nome do item 5</b>
                            <input type="text" name="item[url]" placeholder="Ex: sugestão de nome" required />
                        </label>

                        <label className="ls-label">
                            <b className="ls-label-text">Nome do item 6</b>
                            <input type="text" name="item[url]" placeholder="Ex: sugestão de nome" required />
                        </label>
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default ItemsForm;
