<?php

class Traffic {

    private $db;
    private $ip;
    private $data;
    private $uri;
    private $user_agent;

    public function __construct() {

        $this->db = new PDO('mysql:host=localhost; dbname=charts; charset=utf8', 'root', '');
        $this->uri = filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_DEFAULT);
        $this->ip = '187.104.148.214'; //filter_input(INPUT_SERVER, 'REMOTE_ADDR', FILTER_VALIDATE_IP);

        $cookie = filter_input(INPUT_COOKIE, md5($this->uri), FILTER_DEFAULT);
        $this->user_agent = filter_input(INPUT_SERVER, 'HTTP_USER_AGENT');

        if (!$cookie):
            $this->set_cookie();
            $this->_set_data();
        endif;
    }

    private function set_cookie() {
        setcookie(md5($this->uri), TRUE, time() + strtotime(date('Y-m-d 23:59:59')) - time());
    }

    private function _set_data() {
        $geo = json_decode(file_get_contents("http://ip-api.com/json/{$this->ip}"));

        $this->data['data'] = date('Y-m-d H:i:s');
        $this->data['pagina'] = $this->uri;
        $this->data['ip'] = $this->ip;
        $this->data['cidade'] = (isset($geo->city)) ? $geo->city : 'Desconhecida';
        $this->data['regiao'] = (isset($geo->regionName)) ? $geo->regionName : 'Desconhecida';
        $this->data['pais'] = (isset($geo->country)) ? $geo->country : 'Desconhecido';
        $this->data['navegador'] = $this->_get_browser();
        $this->data['plataforma'] = $this->_get_platforms();
        $this->data['referencia'] = $this->_get_reference();

        $this->_rec_data();
    }

    private function _get_browser() {
        include_once('../config/browsers.php');
        foreach ($browsers as $key => $value) :
            if (preg_match('|' . $key . '.*?([0-9\.]+)|i', $this->user_agent)):
                return $value;
            endif;
        endforeach;
    }

    private function _get_platforms() {
        include_once('../config/plataforms.php');
        foreach ($platforms as $key => $value) :
            if (preg_match('|' . preg_quote($key) . '|i', $this->user_agent)):
                return $value;
            endif;
        endforeach;
    }

    private function _get_reference() {
        $referer = filter_input(INPUT_SERVER, 'HTTP_REFERER', FILTER_VALIDATE_URL);
        $referer_host = parse_url($referer, PHP_URL_HOST);
        $host = filter_input(INPUT_SERVER, 'SERVER_NAME');

        if (!$referer):
            $retorno = 'Acesso Direto';
        elseif ($referer_host == $host):
            $retorno = 'Navegação Interna';
        else:
            $retorno = $referer;
        endif;

        return $retorno;
    }

    private function _rec_data() {
        $sql = "INSERT INTO trafego(data, pagina, ip, cidade, regiao, pais, navegador, referencia, plataforma) "
                . "VALUES (:data, :pagina, :ip, :cidade, :regiao, :pais, :navegador, :referencia, :plataforma)";
        $query = $this->db->prepare($sql);
        $query->execute($this->data);
    }

}

?>
